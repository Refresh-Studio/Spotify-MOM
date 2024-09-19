'use client';

import React, { Suspense, useEffect, useState } from 'react';

import { Album } from '../../interface/gallery/album.interface';

import { Loader } from '../component/loader/Loader';
import { PageTransition } from '../component/page-slide/PageTransition';
import { Albums } from './component/albums/Albums';
import { Hero } from './component/hero/Hero';

import { getAlbums } from '../../../sanity/sanity.query';

type DisplayState = 'grid' | 'list';
const GalleryPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [displayState, setDisplayState] = useState<DisplayState>('grid');

  useEffect(() => {
    const callApi = async () => {
      const albums = await getAlbums();
      setAlbums(albums);
      setLoading(false);
    };
    callApi();
  }, []);

  const handleDisplayState = (state: DisplayState) => {
    setDisplayState(state);
  };

  return (
    <Suspense>
      <main>
        <PageTransition />
        <Hero
          displayState={displayState}
          handleDisplayState={handleDisplayState}
          albumCount={albums.length}
        />
        {!loading && <Albums displayState={displayState} albums={albums} />}
        {loading && <Loader />}
      </main>
    </Suspense>
  );
};

export default GalleryPage;
