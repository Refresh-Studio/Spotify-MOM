import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Album } from '../../../../interface/gallery/album.interface';

import { wideFont } from '../../../../constant';

import './albums.scss';

interface Props {
  albums: Album[];
}

export const Albums = ({ albums = [] }: Props) => (
  <section className="albums dark-section">
    {albums.map((album: Album) => (
      <AlbumItem key={album.slug} album={album} />
    ))}
  </section>
);

interface AlbumProps {
  album: Album;
}

const AlbumItem = ({ album }: AlbumProps) => (
  <div className="album">
    <Image src={album.images[0]?.src} alt="" height="480" width={387} />
    <Link href={`/albums/${album.slug}`}>
      <p className={`typescale-5 ${wideFont.className}`}>{album.event?.name}</p>
      <p className={`typescale-5 ${wideFont.className}`}>{album.event?.address}</p>
    </Link>
    <small className="typescale-3">{album.images?.length ?? 0} images</small>
  </div>
);
