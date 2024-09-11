import { Dialog, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Promotion } from '../../../interface/promotion.interface';

import { ReactComponent as CloseIcon } from '../../../asset/close.svg';
import { ReactComponent as RightIcon } from '../../../asset/right.svg';

import { wideFont } from '../../../constant';

import './modal.scss';

interface Props {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (open: boolean) => void;
  promotion: Promotion;
}

export const Modal = ({ open, setOpen, promotion }: Props) => (
  <Dialog open={open} onClose={() => {}} className="modal">
    <div>
      <DialogPanel className="modal__panel">
        <div className="modal__details">
          <Image src={promotion?.image} alt={promotion?.event?.name} width={184} height={230} />
          <div>
            <div className="modal__details-event">
              <p className="typescale-2">Gallery</p>
              <h1 className={`typescale-5 ${wideFont.className}`}>
                RELIVE YOUR FAVOURITE MOMENTS ON THE MOM GALLERY
              </h1>
            </div>
            <div className="modal__times">
              <p className="typescale-2">05/09 – 08/09</p>
            </div>
          </div>
        </div>
        <div className="modal__actions">
          <div onClick={() => setOpen(false)}>
            <CloseIcon />
          </div>
          {promotion?.event?.quicketEventId && (
            <Link href="/albums" onClick={() => setOpen(false)}>
              <RightIcon />
            </Link>
          )}
        </div>
      </DialogPanel>
    </div>
  </Dialog>
);
