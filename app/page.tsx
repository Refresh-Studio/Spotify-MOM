'use client';

import React from 'react';

import { Events } from './component/event/Events';
import { Hero } from './component/hero/Hero';
import { Playlist } from './component/playlist/Playlist';
import { Subscription } from './component/subscription/Subscription';
import { Ticker } from './component/ticker/Ticker';
import { GetTickets } from './component/ticker/tickets/GetTickets';

const Home = () => (
  <main>
    <Hero />
    <Events />
    <Ticker>
      <GetTickets />
    </Ticker>
    <Playlist />
    <Subscription />
  </main>
);

export default Home;
