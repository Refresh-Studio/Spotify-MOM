import React, { Suspense } from 'react';

import { Artists } from './component/artists/Artists';
import { Hero } from './component/hero/Hero';

import { getArtists } from '../../../sanity/sanity.query';

const ArtistsPage = async () => {
  const artists = await getArtists();

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
