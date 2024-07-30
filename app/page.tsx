import React from 'react';

import { Hero } from './component/hero/Hero';
import { Banner } from "./component/banner/Banner";
import { Playlist } from "./component/playlist/Playlist";

const Home = () => (
  <main>
    <Hero />
    <Banner />
      <Playlist />
  </main>
);

export default Home;
