'use client';

import React from 'react';

import { Banner } from './component/banner/Banner';
import { Hero } from './component/hero/Hero';
import { Playlist } from './component/playlist/Playlist';
import { Subscription } from './component/subscription/Subscription';

const Home = () => (
  <main>
    <Hero />
    <Banner />
    <Playlist />
    <Subscription />
  </main>
);

export default Home;
