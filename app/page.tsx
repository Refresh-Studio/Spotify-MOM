import React from 'react';

import { Banner } from './component/banner/Banner';
import { Hero } from './component/hero/Hero';
import { Playlist } from './component/playlist/Playlist';

const Home = () => (
  <main>
    <Hero />
    <Banner />
    <Playlist />
  </main>
);

export default Home;
