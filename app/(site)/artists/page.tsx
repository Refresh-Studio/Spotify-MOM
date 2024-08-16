'use client';

import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';

import { Artist } from '../../interface/artist/artist.interface';

import { Loader } from '../component/loader/Loader';
import { Artists } from './component/artists/Artists';
import { Hero } from './component/hero/Hero';

import { getArtists } from '../../../sanity/sanity.query';
import { retrieveArtists } from '../../../spotify/spotify.client';

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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callApi = async () => {
      // const { accessToken } = await getData();
      const artists = await getArtists();
      // const spotifyArtists = await retrieveArtists(
      //   accessToken,
      //   artists.map((artist: Artist) => artist.slug)
      // );
      // const mappedArtists = artists.reduce((accum: Artist[], item: Artist) => {
      //   const spotifyArtist = spotifyArtists.find(
      //     (artist: { slug: string }) => artist.slug === item.slug
      //   );
      //   if (spotifyArtist) {
      //     accum.push({
      //       ...item,
      //       ...spotifyArtist
      //     });
      //   }
      //
      //   return accum;
      // }, []);

      artists.sort((a: Artist, b: Artist) => a.name.localeCompare(b.name));
      setArtists(artists);
      setLoading(false);
    };

    callApi();
  }, []);

  return (
    <Suspense>
      <main>
        <Hero />
        {!loading && <Artists artists={artists} />}
        {loading && <Loader />}
      </main>
    </Suspense>
  );
};

export default ArtistsPage;
