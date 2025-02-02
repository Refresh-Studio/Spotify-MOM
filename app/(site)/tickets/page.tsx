'use client';

import React, { Suspense, useEffect, useState } from 'react';

import { EventItem } from '../../interface/event/event-item.interface';

import { Loader } from '../component/loader/Loader';
import { PageTransition } from '../component/page-slide/PageTransition';
import { Hero } from './component/hero/Hero';
import { Tickets } from './component/tickets/Tickets';

import { getEvents } from '../../../sanity/sanity.query';

const TicketsPage = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callApi = async () => {
      const events = await getEvents();
      setEvents(events);
      setLoading(false);
    };

    callApi();
  }, []);

  return (
    <Suspense>
      <PageTransition />
      <main className="tickets">
        <Hero eventCount={events.length} />
        {!loading && <Tickets events={events} />}
        {loading && <Loader />}
      </main>
    </Suspense>
  );
};

export default TicketsPage;
