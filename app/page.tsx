'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Banner } from './component/banner/Banner';
import { Footer } from './component/footer/Footer';
import { Hero } from './component/hero/Hero';
import { Playlist } from './component/playlist/Playlist';
import { Subscription } from './component/subscription/Subscription';

const getData = async () => {
  const authToken = Buffer.from(
    `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
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

const Home = () => {
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    const callApi = async () => {
      const { accessToken } = await getData();
      setAccessToken(accessToken);
    };

    callApi();
  }, []);

  return (
    <main>
      <Hero />
      <Banner />
      <Playlist accessToken={accessToken} />
      <Subscription />
    </main>
  );
};

export default Home;
