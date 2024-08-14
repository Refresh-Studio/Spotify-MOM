'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

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
  const [purchasingEvent, setPurchasingEvent] = useState<string>();

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
          {filteredEvents.map((event: EventItem) => (
            <Event
              key={event.slug}
              registering={purchasingEvent === event.slug}
              expandable
              filled
              expanded={event.slug === eventSlug}
              event={event}
              onCancel={() => setPurchasingEvent(undefined)}
              action={
                event.free ? (
                  <Button
                    hollow
                    large
                    icon={<PlusIcon />}
                    target="_blank"
                    link={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.name)}&dates=${formatGoogleCalendarDate(event.startDate, event.startTime)}/${formatGoogleCalendarDate(event.startDate ?? event.endDate, event.endTime)}&details=${encodeURIComponent(
                      (event.description ?? [])
                        .flatMap((block) => block?.children)
                        .map((block) => block?.text)
                        .join('\n')
                    )}`}
                    label="Add to Calendar"
                  />
                ) : (
                  <Button
                    clickable
                    hollow
                    large
                    label="Register for Tickets"
                    onClick={() => setPurchasingEvent(event.slug)}
                  />
                )
              }
            />
          ))}
        </ul>
      </main>
    </section>
  );
};
