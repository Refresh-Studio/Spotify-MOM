'use client';

import React from 'react';

import { Events } from './component/event/Events';
import { Hero } from './component/hero/Hero';
import { Playlist } from './component/playlist/Playlist';
import { Subscription } from './component/subscription/Subscription';

const Home = () => (
  <main>
    <Hero />
    <Events />
    <Playlist />
    <Subscription />
  </main>
);

export default Home;
