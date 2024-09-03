'use client';

import React, { Suspense, useEffect, useState } from 'react';

import { Album } from '../../../interface/gallery/album.interface';

import { Loader } from '../../component/loader/Loader';
import { Album as AlbumComponent } from './component/album/Album';

import { getAlbum } from '../../../../sanity/sanity.query';

interface Props {
  params: { slug: string };
}

const AlbumPage = ({ params: { slug } }: Props) => {
  const [album, setAlbum] = useState<Album>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callApi = async () => {
      const album = await getAlbum(slug);

      setAlbum(album);
      setLoading(false);
    };

    callApi();
  }, [slug]);

  return (
    <main className="dark-section">
      <Suspense>
        {loading && <Loader />}
        {!loading && album && <AlbumComponent album={album} />}
      </Suspense>
    </main>
  );
};

export default AlbumPage;
