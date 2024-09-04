import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { AlbumImage } from '../../../../../interface/gallery/album-image.interface';

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
  <Dialog open={open} onClose={() => {}} className="image-modal">
    <div>
      <div className="image-modal__content">
        <Image src={image.src} alt={image.name} fill objectFit="contain" />
        <div className="image-modal__actions">
          <Share image={image} />
          <Link href={image.src} target="_blank" download>
            <DownloadIcon />
          </Link>
          <div onClick={() => setOpen(false)}>
            <FullscreenIcon />
          </div>
        </div>
      </div>
    </div>
  </Dialog>
);
