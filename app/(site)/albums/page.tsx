'use client';

import React, { Suspense, useEffect, useState } from 'react';

import { Album } from '../../interface/gallery/album.interface';

import { Loader } from '../component/loader/Loader';
import { Albums } from './component/albums/Albums';
import { Hero } from './component/hero/Hero';

import { getAlbums } from '../../../sanity/sanity.query';

const GalleryPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callApi = async () => {
      const albums = await getAlbums();

      setAlbums(albums);
      setLoading(false);
    };

    callApi();
  }, []);

  return (
    <Suspense>
      <main>
        <Hero albumCount={albums.length} />
        {!loading && <Albums albums={albums} />}
        {loading && <Loader />}
      </main>
    </Suspense>
  );
};

export default GalleryPage;
