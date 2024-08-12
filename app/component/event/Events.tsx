import React, { Fragment } from 'react';

import { wideFont } from '../../constant';
import { Button } from '../button/Button';

import './events.scss';

const MOCK_EVENT = {
  id: 1,
  name: 'Moms test event',
  address: 'At some awesome venue',
  startTime: '10:00',
  endTime: '22:00',
  price: 200.0,
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

interface Event {
  id: number;
  name: string;
  address: string;
  price: number;
  startTime: string;
  endTime: string;
  date: Date;
}

interface EventListProps {
  title: string;
  events?: Event[];
}

const EventList = ({ title, events }: EventListProps) => (
  <article className="event-list">
    <header>
      <h1 className={`typescale-8 ${wideFont.className}`}>{title}</h1>
    </header>
    <section>
      {(events ?? []).map((event: Event, index: number) => (
        <Fragment key={event.id}>
          <div className="event-list__event">
            <h2 className={`typescale-6 ${wideFont.className}`}>{event.name}</h2>
            <h3 className={`typescale-6 ${wideFont.className}`}>{event.address}</h3>
            <small className="typescale-4">
              {event.price === 0 ? 'Free Ticket' : `R${event.price.toFixed(2)}`}
            </small>
            <footer>
              <div>
                <small className="typescale-4">
                  {event.startTime} - {event.endTime}
                </small>
                <small className="typescale-4">{event.date.toLocaleDateString()}</small>
              </div>
              <Button small link={`/events/${event.id}`} label="Learn More" />
            </footer>
          </div>
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
