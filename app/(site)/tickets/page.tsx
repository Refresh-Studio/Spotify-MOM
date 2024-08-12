import React, { Suspense } from 'react';

import { Hero } from './component/hero/Hero';
import { Tickets } from './component/tickets/Tickets';

import { getEvents } from '../../../sanity/sanity.query';

const TicketsPage = async () => {
  const events = await getEvents();

  return (
    <Suspense>
      <main>
        <Hero />
        <Tickets events={events} />
      </main>
    </Suspense>
  );
};

export default TicketsPage;
