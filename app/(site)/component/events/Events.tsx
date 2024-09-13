'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';

import { EventItem } from '../../../interface/event/event-item.interface';
import { EventList } from '../../../interface/event/event-list.interface';

import { getEventLists } from '../../../../sanity/sanity.query';
import { wideFont } from '../../../constant';
import { Button } from '../button/Button';
import { Event } from './event/Event';

import './events.scss';

gsap.registerPlugin(ScrollTrigger);

export const Events = () => {
  const [eventsList, setEventsList] = useState<EventList[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const eventsList = await getEventLists();
      setEventsList(eventsList);
    };

    callApi();
  }, []);

  {
    /*<header>*/
  }
  {
    /*  <h1 className={`typescale-5 ${wideFont.className}`}>How mom tickets work</h1>*/
  }
  {
    /*  <p className="typescale-4">*/
  }
  {
    /*    Some events are free and for some we need to keep a head count! Events that require*/
  }
  {
    /*    registration go through a randomised process which automatically releases tickets in*/
  }
  {
    /*    batches every day.{' '}*/
  }
  {
    /*    <strong>Check your inbox daily to see if you’ve been issued tickets for MOM.</strong>*/
  }
  {
    /*  </p>*/
  }
  {
    /*</header>*/
  }

  return (
    <section className="events">
      <main>
        {eventsList.map((eventList: EventList) => (
          <ListOfEvents key={eventList.slug} title={eventList.title} events={eventList.events} />
        ))}
      </main>
    </section>
  );
};

interface EventListProps {
  title: string;
  events?: EventItem[];
}

const ListOfEvents = ({ title, events }: EventListProps) => {
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRefs = (element: HTMLDivElement | null, index: number) => {
    if (element) {
      eventRefs.current[index] = element;
    }
  };

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
  }, [events]);

  return (
    <article className="event-list">
      <header>
        <h1 className={`typescale-8 ${wideFont.className}`}>{title}</h1>
        <Button light label="View All" link="/tickets" />
      </header>
      <section>
        {(events ?? []).map((event: EventItem, index: number) => (
          <div key={event._id} ref={(element) => setRefs(element, index)}>
            <Event
              event={event}
              action={
                <Button light small link={`/tickets?event=${event.slug}`} label="Learn More" />
              }
            />
            {index % 2 === 0 && (
              <div>
                <hr />
              </div>
            )}
          </div>
        ))}
      </section>
    </article>
  );
};
