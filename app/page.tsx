import React from 'react';

import { Banner } from './component/banner/Banner';
import { Hero } from './component/hero/Hero';
import { Playlist } from './component/playlist/Playlist';
import { Footer } from "./component/footer/Footer";

const Home = () => (
  <main>
    <Hero />
    <Banner />
    <Playlist />
      <Footer />
  </main>
);

export default Home;
