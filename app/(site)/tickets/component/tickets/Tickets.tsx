'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

import { scrollIntoView } from '../../../../util';

import { EventItem } from '../../../../interface/event/event-item.interface';

import { Button } from '../../../component/button/Button';
import { Event } from '../../../component/events/event/Event';
import { Tabs } from '../../../component/tabs/Tabs';

import { ReactComponent as PlusIcon } from '../../../../asset/plus.svg';

import './tickets.scss';

const TABS = Object.freeze([
  { path: 'all', name: 'All' },
  { path: 'build-up', name: 'Build Up' },
  { path: 'thursday', name: 'First Thursdays' },
  { path: 'friday', name: 'Friday' },
  { path: 'saturday', name: 'Saturday' },
  { path: 'sunday', name: 'Sunday' }
]);

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

    return events.filter((event: EventItem) => event.tag.includes(query!));
  }, [query, events]);

  return (
    <section className="tickets dark-section">
      <header id="tickets-tabs">
        <Tabs hollow tabs={TABS} />
      </header>
      <main>
        <ul>
          {filteredEvents.map((event: EventItem) => (
            <Event
              key={event.slug}
              registering={purchasingEvent === event.slug}
              expandable
              filled
              event={event}
              onCancel={() => setPurchasingEvent(undefined)}
              action={
                event.free ? (
                  <Button hollow large icon={<PlusIcon />} label="Add to Calendar" />
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
