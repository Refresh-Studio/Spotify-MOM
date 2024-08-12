'use client';

import React, { useState } from 'react';

import { Button } from '../../../component/button/Button';
import { EventItem } from '../../../component/events/Events';
import { Event } from '../../../component/events/event/Event';
import { Tabs } from '../../../component/tabs/Tabs';

import { ReactComponent as PlusIcon } from '../../../asset/plus.svg';

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
  const [purchasingEvent, setPurchasingEvent] = useState<number>();

  return (
    <section className="tickets dark-section">
      <header id="tickets-tabs">
        <Tabs hollow tabs={TABS} />
      </header>
      <main>
        <ul>
          {events.map((event: EventItem) => (
            <Event
              key={event.id}
              registering={purchasingEvent === event.id}
              expandable
              filled
              event={event}
              onCancel={() => setPurchasingEvent(undefined)}
              action={
                event.free ? (
                  <Button hollow large icon={<PlusIcon />} link="" label="Add to Calendar" />
                ) : (
                  <Button
                    clickable
                    hollow
                    large
                    label="Register for Tickets"
                    onClick={() => setPurchasingEvent(event.id)}
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
