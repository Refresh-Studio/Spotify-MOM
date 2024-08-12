'use client';

import React from 'react';

import { Acts } from './component/acts/Acts';
import { Banner } from './component/banner/Banner';
import { Events } from './component/event/Events';
import { Hero } from './component/hero/Hero';
import { Playlist } from './component/playlist/Playlist';
import { Ticker } from './component/ticker/Ticker';
import { GetTickets } from './component/ticker/tickets/GetTickets';

const Home = () => (
  <main>
    <Hero />
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
