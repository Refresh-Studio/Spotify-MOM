import Link from 'next/link';
import React from 'react';

import { Album as AlbumItem } from '../../../../../interface/gallery/album.interface';
import { GalleryImage } from '../../../../../interface/gallery/gallery-image.interface';

import { ResponsiveImage } from '../../../../component/carousel/ResponsiveImage';

import { ReactComponent as DownloadIcon } from '../../../../../asset/download.svg';
import { ReactComponent as ShareIcon } from '../../../../../asset/share.svg';

import './album.scss';

interface Props {
  album: AlbumItem;
}

export const Album = ({ album }: Props) => (
  <section className="album-section dark-section">
    {album.images.map((image: GalleryImage) => (
      <div key={image._id}>
        <ResponsiveImage src={image.src} alt={image.name} key={image._id} />
        <footer>
          <div>
            <ShareIcon />
          </div>
          <Link href={image.src} target="_blank" download>
            <DownloadIcon />
          </Link>
        </footer>
      </div>
    ))}
  </section>
);
