import Link from 'next/link';
import React, { useState } from 'react';

import { AlbumImage } from '../../../../../interface/gallery/carousel-image.interface';

import { ReactComponent as CloseIcon } from '../../../../../asset/close.svg';
import { ReactComponent as FacebookIcon } from '../../../../../asset/facebook.svg';
import { ReactComponent as ShareIcon } from '../../../../../asset/share.svg';
import { ReactComponent as TwitterIcon } from '../../../../../asset/twitter.svg';
import { ReactComponent as WhatsappIcon } from '../../../../../asset/whatsapp.svg';

import './share.scss';

interface Props {
  image: AlbumImage;
}

export const Share = ({ image }: Props) => {
  const [showList, setShowList] = useState<boolean>(false);

  const toggle = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    setShowList(!showList);
  };

  return (
    <div className="share">
      <div onClick={toggle}>
        {showList && <CloseIcon />}
        {!showList && <ShareIcon />}
      </div>
      <div className={`share__list ${showList ? 'share__list--show' : ''}`}>
        <Link
          target="_blank"
          href={`https://api.whatsapp.com/send?text=Check+out+this+image!+${image.src}`}
          onClick={(e) => e.stopPropagation()}
        >
          <WhatsappIcon />
        </Link>
        <Link
          target="_blank"
          href={`https://twitter.com/intent/tweet?url=${image.src}&text=Check+out+this+image!`}
          onClick={(e) => e.stopPropagation()}
        >
          <TwitterIcon />
        </Link>
        <Link
          target="_blank"
          href={`https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=${image.src}`}
          onClick={(e) => e.stopPropagation()}
        >
          <FacebookIcon />
        </Link>
      </div>
    </div>
  );
};
