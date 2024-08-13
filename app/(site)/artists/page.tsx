'use client';

import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';

import { Artist } from '../../interface/artist/artist.interface';

import { Artists } from './component/artists/Artists';
import { Hero } from './component/hero/Hero';

import { getArtists } from '../../../sanity/sanity.query';
import { retrieveArtist } from '../../../spotify/spotify.client';

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

const ArtistsPage = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const { accessToken } = await getData();
      const artists = await getArtists();
      const artistPromises = artists.map(
        async (artist: Artist) => await retrieveArtist(accessToken, artist.slug)
      );

      const spotifyArtists = await Promise.all(artistPromises);
      const mappedArtists = artists.reduce((accum: Artist[], item: Artist) => {
        const spotifyArtist = spotifyArtists.find((artist) => artist.slug === item.slug);
        if (spotifyArtist) {
          accum.push({
            ...item,
            ...spotifyArtist
          });
        }

        return accum;
      }, []);

      setArtists(mappedArtists);
    };

    callApi();
  }, []);

  return (
    <Suspense>
      <main>
        <Hero artistCount={artists.length} />
        <Artists artists={artists} />
      </main>
    </Suspense>
  );
};

export default ArtistsPage;
