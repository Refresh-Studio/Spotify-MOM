'use client';

import axios from 'axios';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useState } from 'react';

import { Acts } from './component/acts/Acts';
import { Banner } from './component/banner/Banner';
import { Carousel } from './component/carousel/Carousel';
import { Events } from './component/events/Events';
import { Hero } from './component/hero/Hero';
import MotherOfMusic from './component/mother-of-music/MotherOfMusic';
import { Playlist } from './component/playlist/Playlist';
import { Social } from './component/social/Social';

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

gsap.registerPlugin(ScrollTrigger);

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
    <main style={{ backgroundColor: 'transparent' }}>
      <Hero />
      <MotherOfMusic />
      <Acts accessToken={accessToken!} />
      <Carousel />
      {/*<Events />*/}
      {/*<Banner />*/}
      {/*<Playlist />*/}
      {/*<Social />*/}
    </main>
  );
};

export default Home;
