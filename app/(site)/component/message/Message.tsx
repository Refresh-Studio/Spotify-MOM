import React from 'react';

import { ReactComponent as BannerIcon } from '../../../asset/banner.svg';

import { wideFont } from '../../../constant';

import './message.scss';

export const Message = () => (
  <section className="message dark-section">
    <div className="message__content">
      <p className={`typescale-5 ${wideFont.className}`}>
        110+ Artists, 25 Events, 1 Mother City !
      </p>
    </div>
    <footer>
      <BannerIcon />
    </footer>
  </section>
);
