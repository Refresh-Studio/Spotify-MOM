import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

import { Filter } from '../../../../interface/filter/filter.interface';
import { Album } from '../../../../interface/gallery/album.interface';

import { TabItem, Tabs } from '../../../component/tabs/Tabs';

import { ReactComponent as ChevronRightIcon } from './../../../../asset/chevron-right.svg';

import { getGalleryFilters } from '../../../../../sanity/sanity.query';
import { wideFont } from '../../../../constant';

import './albums.scss';

type DisplayState = 'grid' | 'list';

interface Props {
  albums: Album[];
  displayState: DisplayState;
}

export const Albums = ({ albums = [], displayState }: Props) => {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<TabItem[]>([]);

  useEffect(() => {
    const callApi = async () => {
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
    };

    callApi();
  }, []);

  const query = useMemo(() => {
    return searchParams.get('query');
  }, [searchParams]);

  const filteredAlbums = useMemo(() => {
    if (!query || query === 'all') {
      return albums;
    }

    return albums.filter((album: Album) => album.filterTags.includes(query!));
  }, [query, albums]);
  if (displayState === 'grid') {
    return (
      <section className="albums dark-section">
        <div className="albums__tabs">
          <Tabs tabs={filters} hollow />
        </div>
        <div className="albums__items">
          {filteredAlbums.map((album: Album) => (
            <AlbumGridItem key={album.slug} album={album} />
          ))}
        </div>
      </section>
    );
  }

  if (displayState === 'list') {
    return (
      <section className="list-albums">
        <div className="albums__tabs">
          <Tabs tabs={filters} hollow />
        </div>
        <div className="list-albums__items">
          {filteredAlbums.map((album: Album) => (
            <AlbumListItem key={album.slug} album={album} />
          ))}
        </div>
      </section>
    );
  }
};

interface AlbumProps {
  album: Album;
}

const AlbumGridItem = ({ album }: AlbumProps) => (
  <Link href={`/albums/${album.slug}`} className="album">
    <Image src={album.coverImage} alt={album.name} height="480" width={387} />
    <p className={`typescale-5 ${wideFont.className}`}>{album.event?.name}</p>
    <p className={`typescale-5 ${wideFont.className}`}>{album.event?.address}</p>
    <small className="typescale-2">{album.images?.length ?? 0} images</small>
  </Link>
);

const AlbumListItem = ({ album }: AlbumProps) => (
  <Link href={`/albums/${album.slug}`} className="list-album">
    <div className="list-album__wrapper">
      <p className={`typescale-2 ${wideFont.className}`}>{album.event?.name}</p>
      <p className={`typescale-2 ${wideFont.className}`}>{album.event?.address}</p>
    </div>
    <div className="list-album__content-wrapper">
      <small className="typescale-2">{album.images?.length ?? 0} images</small>
      <ChevronRightIcon />
    </div>
  </Link>
);
