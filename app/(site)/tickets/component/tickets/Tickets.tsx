'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo } from 'react';

import { formatGoogleCalendarDate, scrollIntoView } from '../../../../util';

import { EventItem } from '../../../../interface/event/event-item.interface';

import { Button } from '../../../component/button/Button';
import { Event } from '../../../component/events/event/Event';

import { ReactComponent as PlusIcon } from '../../../../asset/plus.svg';

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

            return (
              <Event
                key={event.slug}
                expandable
                filled
                expanded={event.slug === eventSlug}
                event={event}
                action={
                  event.free ? (
                    <Button
                      hollow
                      large
                      icon={<PlusIcon />}
                      target="_blank"
                      link={calendarLink}
                      label="Add to Calendar"
                    />
                  ) : (
                    <Button
                      hollow
                      large
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
