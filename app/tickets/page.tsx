import React, { Suspense } from 'react';

import { EventItem } from '../component/events/Events';
import { Hero } from './component/hero/Hero';
import { Tickets } from './component/tickets/Tickets';

const MOCK_EVENT: EventItem = {
  id: 1,
  name: 'Moms test event',
  address: 'At some awesome venue',
  startTime: '10:00',
  endTime: '22:00',
  free: false,
  date: new Date(),
  description:
    'Lorem ipsum dolor sit amet consectetur. Suspendisse cursus magna tempor gravida at molestie rhoncus. Est in pretium phasellus ullamcorper ut enim. At feugiat sollicitudin at elit pretium.'
};

const TicketsPage = () => (
  <Suspense>
    <main>
      <Hero />
      <Tickets events={[MOCK_EVENT, MOCK_EVENT]} />
    </main>
  </Suspense>
);

export default TicketsPage;
