'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { scrollIntoView } from '../../../../util';

import { EventItem } from '../../../../interface/event/event-item.interface';
import { Filter } from '../../../../interface/filter/filter.interface';
import { Album } from '../../../../interface/gallery/album.interface';

import { Button } from '../../../component/button/Button';
import { Event } from '../../../component/events/event/Event';
import { TabItem, Tabs } from '../../../component/tabs/Tabs';

import { getAlbums, getEventFilters } from '../../../../../sanity/sanity.query';

import './tickets.scss';

interface Props {
  events: EventItem[];
}

gsap.registerPlugin(ScrollTrigger);

export const Tickets = ({ events }: Props) => {
  const searchParams = useSearchParams();
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  const eventSlug = useMemo(() => {
    return searchParams.get('event');
  }, [searchParams]);

  const query = useMemo(() => {
    return searchParams.get('query');
  }, [searchParams]);

  const [filters, setFilters] = useState<TabItem[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const eventFilters = await getEventFilters();
      setFilters([
        {
          path: 'all',
          name: 'All'
        },
        ...eventFilters.map((filter: Filter) => ({ path: filter.slug, name: filter.title }))
      ]);

      const albums = await getAlbums();
      setAlbums(albums);
    };

    callApi();
  }, []);

  useEffect(() => {
    if (eventSlug) {
      scrollIntoView(eventSlug);
    }
  }, [eventSlug]);

  const filteredEvents = useMemo(() => {
    if (!query || query === 'all') {
      return events;
    }

    return events.filter((event: EventItem) => event.tags.includes(query!));
  }, [query, events]);

  useEffect(() => {
    eventRefs.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [filteredEvents]);

  const setRefs = (element: HTMLDivElement | null, index: number) => {
    if (element) {
      eventRefs.current[index] = element;
    }
  };

  return (
    <section className="dark-section">
      <Tabs tabs={filters} hollow />
      <main>
        <ul>
          {filteredEvents.map((event: EventItem, index: number) => {
            const albumSlug = albums.find((album) => album.event.slug === event.slug)?.slug;

            return (
              <div key={event.slug} ref={(element) => setRefs(element, index)}>
                <Event
                  key={event.slug}
                  expandable
                  filled
                  expanded={event.slug === eventSlug}
                  event={event}
                  action={
                    albumSlug ? (
                      <Button light large link={`/albums/${albumSlug}`} label="View Gallery" />
                    ) : (
                      <></>
                    )
                  }
                />
              </div>
            );
          })}
        </ul>
      </main>
    </section>
  );
};
