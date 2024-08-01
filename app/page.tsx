import axios from 'axios';
import React from 'react';

import { Banner } from './component/banner/Banner';
import { Footer } from './component/footer/Footer';
import { Hero } from './component/hero/Hero';
import { Playlist } from './component/playlist/Playlist';

const getData = async () => {
  const authToken = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');
  const { data } = await axios.post<{ access_token: string }>(
    'https://accounts.spotify.com/api/token?scope=web-playback',
    { grant_type: 'client_credentials' },
    {
      headers: {
        Authorization: `Basic ${authToken}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );

  return { accessToken: data.access_token };
};

const Home = async () => {
  const { accessToken } = await getData();

  return (
    <main>
      <Hero />
      <Banner />
      <Playlist accessToken={accessToken} />
      <Footer />
    </main>
  );
};

export default Home;
