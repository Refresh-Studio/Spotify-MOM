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
              <p className="typescale-2">Register for free tickets</p>
              <h1 className={`typescale-5 ${wideFont.className}`}>{promotion?.event?.name}</h1>
              <h2 className={`typescale-5 ${wideFont.className}`}>{promotion?.event?.address}</h2>
            </div>
            <div className="modal__times">
              <p className="typescale-2">{promotion?.event?.startDate}</p>
              <p className="typescale-2">
                {promotion?.event?.startTime} - {promotion?.event?.endTime}
              </p>
            </div>
          </div>
        </div>
        <div className="modal__actions">
          <div onClick={() => setOpen(false)}>
            <CloseIcon />
          </div>
          {promotion?.event?.quicketEventId && (
            <Link
              href={promotion?.event?.quicketEventId}
              target="_blank"
              onClick={() => setOpen(false)}
            >
              <RightIcon />
            </Link>
          )}
        </div>
      </DialogPanel>
    </div>
  </Dialog>
);
