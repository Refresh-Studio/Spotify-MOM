'use client';

import React, { Suspense, useEffect, useState } from 'react';

import { EventItem } from '../../interface/event/event-item.interface';

import { Hero } from './component/hero/Hero';
import { Tickets } from './component/tickets/Tickets';

import { getEvents } from '../../../sanity/sanity.query';

const TicketsPage = () => {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const events = await getEvents();
      setEvents(events);
    };

    callApi();
  }, []);

  return (
    <Suspense>
      <main>
        <Hero ticketCount={events.length} />
        <Tickets events={events} />
      </main>
    </Suspense>
  );
};

export default TicketsPage;
