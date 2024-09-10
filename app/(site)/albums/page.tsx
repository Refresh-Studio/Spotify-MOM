'use client';

import React, { Suspense, useEffect, useState } from 'react';

import { Album } from '../../interface/gallery/album.interface';

import { Loader } from '../component/loader/Loader';
import { Albums } from './component/albums/Albums';
import { Hero } from './component/hero/Hero';

import { getAlbums, getGalleryFilters } from '../../../sanity/sanity.query';
import { Filter } from '../../interface/filter/filter.interface';
import { TabItem } from '../component/tabs/Tabs';

const GalleryPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [filters, setFilters] = useState<TabItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callApi = async () => {
      const albums = await getAlbums();

      setAlbums(albums);

      const galleryFilters = await getGalleryFilters();
      setFilters([
        ...[
          {
            path: 'all',
            name: 'All'
          }
        ],
        ...galleryFilters.map((filter: Filter) => ({ path: filter.slug, name: filter.title }))
      ]);

      setLoading(false);
    };

    callApi();
  }, []);

  return (
    <Suspense>
      <main>
        <Hero />
        {!loading && <Albums albums={albums} filters={filters} />}
        {loading && <Loader />}
      </main>
    </Suspense>
  );
};

export default GalleryPage;
