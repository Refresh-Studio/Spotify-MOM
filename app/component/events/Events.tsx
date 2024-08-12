import React, { Fragment } from 'react';

import { wideFont } from '../../constant';
import { Button } from '../button/Button';
import { Event } from './event/Event';

import './events.scss';

export interface EventItem {
  id: number;
  name: string;
  address: string;
  startTime: string;
  endTime: string;
  free: boolean;
  date: Date;
  description?: string;
}

const MOCK_EVENT: EventItem = {
  id: 1,
  name: 'Moms test event',
  address: 'At some awesome venue',
  startTime: '10:00',
  endTime: '22:00',
  free: false,
  date: new Date()
};

export const Events = () => (
  <section className="events">
    <header>
      <h1 className={`typescale-5 ${wideFont.className}`}>Event Program</h1>
      <p className="typescale-7">
        Lorem ipsum dolor sit amet consectetur. Sed purus mi risus proin iaculis id. Sem sed laoreet
        massa nunc cursus.
      </p>
    </header>
    <main>
      <EventList
        title="Mom's Hype Events"
        events={[MOCK_EVENT, MOCK_EVENT, MOCK_EVENT, MOCK_EVENT]}
      />
      <EventList
        title="Mom's First Thursdays"
        events={[MOCK_EVENT, MOCK_EVENT, MOCK_EVENT, MOCK_EVENT]}
      />
      <EventList title="Main Program" events={[MOCK_EVENT, MOCK_EVENT, MOCK_EVENT, MOCK_EVENT]} />
    </main>
  </section>
);

interface EventListProps {
  title: string;
  events?: EventItem[];
}

const EventList = ({ title, events }: EventListProps) => (
  <article className="event-list">
    <header>
      <h1 className={`typescale-8 ${wideFont.className}`}>{title}</h1>
    </header>
    <section>
      {(events ?? []).map((event: EventItem, index: number) => (
        <Fragment key={event.id}>
          <Event
            event={event}
            action={<Button small link={`/events/${event.id}`} label="Learn More" />}
          />
          {index % 2 === 0 && (
            <div>
              <hr />
            </div>
          )}
        </Fragment>
      ))}
    </section>
  </article>
);
