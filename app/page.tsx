import React from 'react';

import { Banner } from './component/banner/Banner';
import { Footer } from './component/footer/Footer';
import { Hero } from './component/hero/Hero';
import { Playlist } from './component/playlist/Playlist';

const Home = () => (
  <main>
    <Hero />
    <Banner />
    <Playlist />
    <Footer />
  </main>
);

export default Home;
