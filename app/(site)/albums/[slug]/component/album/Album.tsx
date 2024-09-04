import React, { useState } from 'react';

import { AlbumImage } from '../../../../../interface/gallery/album-image.interface';
import { Album as AlbumItem } from '../../../../../interface/gallery/album.interface';

import { ResponsiveImage } from '../../../../component/carousel/ResponsiveImage';

import { ReactComponent as DownloadIcon } from '../../../../../asset/download.svg';

import { Modal } from '../modal/Modal';
import { Share } from '../share/Share';

import './album.scss';

interface Props {
  album: AlbumItem;
}

export const Album = ({ album }: Props) => {
  const [selectedImage, setSelectedImage] = useState<AlbumImage>();

  return (
    <section className="album-section dark-section">
      {album.images.map((image: AlbumImage) => (
        <div key={image._id} onClick={() => setSelectedImage(image)}>
          <ResponsiveImage src={image.src} alt={image.name} key={image._id} />
          <footer>
            <Share image={image} />
            <a
              href={`/api/download/${encodeURIComponent(image.src)}`}
              download="file.jpg"
              onClick={(event) => event.stopPropagation()}
            >
              <DownloadIcon />
            </a>
          </footer>
        </div>
      ))}
      {selectedImage && (
        <Modal
          open={!!selectedImage}
          setOpen={() => setSelectedImage(undefined)}
          image={selectedImage}
        />
      )}
    </section>
  );
};
