'use client';

import { ArrowTopRightIcon } from '@sanity/icons';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

import { formatGoogleCalendarDate, scrollIntoView } from '../../../../util';

import { EventItem } from '../../../../interface/event/event-item.interface';
import { Filter } from '../../../../interface/filter/filter.interface';
import { Album } from '../../../../interface/gallery/album.interface';

import { Button } from '../../../component/button/Button';
import { Event } from '../../../component/events/event/Event';
import { TabItem, Tabs } from '../../../component/tabs/Tabs';

import { ReactComponent as PlusIcon } from '../../../../asset/plus.svg';

import { getAlbums, getEventFilters } from '../../../../../sanity/sanity.query';

import './tickets.scss';

interface Props {
  events: EventItem[];
}

export const Tickets = ({ events }: Props) => {
  const searchParams = useSearchParams();

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

  return (
    <section className="tickets dark-section">
      <Tabs tabs={filters} hollow />
      <main>
        <ul>
          {filteredEvents.map((event: EventItem) => {
            let calendarLink = 'https://www.google.com/calendar/render?action=TEMPLATE';
            calendarLink += `&text=${encodeURIComponent(event.name)}`;
            calendarLink += `&dates=${formatGoogleCalendarDate(event.calendarStartDate, event.startTime)}/`;
            calendarLink += `${formatGoogleCalendarDate(event.calendarEndDate ?? event.calendarStartDate, event.endTime)}`;
            calendarLink += `&details=${encodeURIComponent(
              (event.description ?? [])
                .flatMap((block) => block?.children)
                .map((block) => block?.text)
                .join('\n')
            )}`;

            const albumSlug = albums.find((album) => album.event.slug === event.slug)?.slug;

            return (
              <Event
                key={event.slug}
                expandable
                filled
                expanded={event.slug === eventSlug}
                event={event}
                action={
                  albumSlug ? (
                    <Button light large link={`/albums/${albumSlug}`} label="View Gallery" />
                  ) : event.free ? (
                    <Button
                      light
                      large
                      icon={<PlusIcon />}
                      target="_blank"
                      link={calendarLink}
                      label="Add to Calendar"
                    />
                  ) : (
                    <Button
                      light
                      large
                      icon={<ArrowTopRightIcon width={20} height={20} />}
                      label="Register for Tickets"
                      link={event.quicketEventId}
                      target="_blank"
                    />
                  )
                }
              />
            );
          })}
        </ul>
      </main>
    </section>
  );
};
