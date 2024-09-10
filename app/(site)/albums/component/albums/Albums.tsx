import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';

import { Album } from '../../../../interface/gallery/album.interface';

import { wideFont } from '../../../../constant';

import './albums.scss';

interface Props {
  albums: Album[];
}

export const Albums = ({ albums = [] }: Props) => {
  const searchParams = useSearchParams();
  const query = useMemo(() => {
    return searchParams.get('query');
  }, [searchParams]);

  const filteredAlbums = useMemo(() => {
    if (!query || query === 'all') {
      return albums;
    }

    return albums.filter((album: Album) => album.filterTags.includes(query!));
  }, [query, albums]);

  return (
    <section className="albums dark-section">
      {filteredAlbums.map((album: Album) => (
        <AlbumItem key={album.slug} album={album} />
      ))}
    </section>
  );
};

interface AlbumProps {
  album: Album;
}

const AlbumItem = ({ album }: AlbumProps) => (
  <Link href={`/albums/${album.slug}`} className="album">
    <Image src={album.coverImage} alt={album.name} height="480" width={387} />
    <p className={`typescale-5 ${wideFont.className}`}>{album.event?.name}</p>
    <p className={`typescale-5 ${wideFont.className}`}>{album.event?.address}</p>
    <small className="typescale-2">{album.images?.length ?? 0} images</small>
  </Link>
);
