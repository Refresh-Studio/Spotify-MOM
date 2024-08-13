'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Acts } from './component/acts/Acts';
import { Banner } from './component/banner/Banner';
import { Carousel } from './component/carousel/Carousel';
import { Events } from './component/events/Events';
import { Hero } from './component/hero/Hero';
import { Message } from './component/message/Message';
import { Playlist } from './component/playlist/Playlist';
import { Ticker } from './component/ticker/Ticker';
import { GetTickets } from './component/ticker/tickets/GetTickets';

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
      <Message />
      <Events />
      <Ticker path="/tickets" speed={75}>
        <GetTickets />
      </Ticker>
      <Banner />
      <Acts accessToken={accessToken!} />
      <Carousel />
      <Playlist />
    </main>
  );
};

export default Home;
