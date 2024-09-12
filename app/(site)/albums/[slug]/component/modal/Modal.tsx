import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';

import { AlbumImage } from '../../../../../interface/gallery/carousel-image.interface';

import { ReactComponent as DownloadIcon } from '../../../../../asset/download.svg';
import { ReactComponent as FullscreenIcon } from '../../../../../asset/fullscreen.svg';

import { Share } from '../share/Share';

import './modal.scss';

interface Props {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (open: boolean) => void;
  image: AlbumImage;
}

export const Modal = ({ open, setOpen, image }: Props) => (
  <Dialog open={open} onClose={() => setOpen(false)} className="image-modal">
    <div onClick={() => setOpen(false)}>
      <div className="image-modal__content">
        <Image
          src={image.src}
          alt={image.name}
          fill
          objectFit="contain"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="image-modal__actions">
          <Share image={image} />
          <a href={`/api/download/${encodeURIComponent(image.src)}`} download="file.jpg">
            <DownloadIcon />
          </a>
          <div onClick={() => setOpen(false)}>
            <FullscreenIcon />
          </div>
        </div>
      </div>
    </div>
  </Dialog>
);
