'use client';

import React from 'react';

import { Acts } from './component/acts/Acts';
import { Banner } from './component/banner/Banner';
import { Events } from './component/events/Events';
import { Hero } from './component/hero/Hero';
import { Message } from './component/message/Message';
import { Playlist } from './component/playlist/Playlist';
import { Ticker } from './component/ticker/Ticker';
import { GetTickets } from './component/ticker/tickets/GetTickets';

const Home = () => (
  <main>
    <Hero />
    <Message />
    <Events />
    <Ticker>
      <GetTickets />
    </Ticker>
    <Banner />
    <Acts />
    <Playlist />
  </main>
);

export default Home;
