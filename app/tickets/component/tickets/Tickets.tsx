import React from 'react';

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

export const Tickets = ({ events }: Props) => (
  <section className="tickets">
    <header id="tickets-tabs">
      <Tabs hollow tabs={TABS} />
    </header>
    <main>
      <ul>
        {events.map((event: EventItem) => (
          <Event
            expandable
            filled
            key={event.id}
            event={event}
            action={<Button hollow large icon={<PlusIcon />} link="" label="Add to Calendar" />}
          />
        ))}
      </ul>
    </main>
  </section>
);
