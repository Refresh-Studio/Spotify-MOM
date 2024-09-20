'use client';

import React, { Suspense, useEffect, useState } from 'react';

import { Artist } from '../../interface/artist/artist.interface';

import { Loader } from '../component/loader/Loader';
import { PageTransition } from '../component/page-slide/PageTransition';
import { Artists } from './component/artists/Artists';
import { Hero } from './component/hero/Hero';

import { getArtists } from '../../../sanity/sanity.query';

const ArtistsPage = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callApi = async () => {
      const artists = await getArtists();
      artists.sort((a: Artist, b: Artist) => a.name.localeCompare(b.name));
      setArtists(artists);
      setLoading(false);
    };

    callApi();
  }, []);

  return (
    <Suspense>
      <main>
        <PageTransition />
        <Hero artistAmount={artists.length} />
        {!loading && <Artists artists={artists} />}
        {loading && <Loader />}
      </main>
    </Suspense>
  );
};

export default ArtistsPage;
