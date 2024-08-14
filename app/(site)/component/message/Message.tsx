import React from 'react';

import { ReactComponent as BannerIcon } from '../../../asset/banner.svg';

import './message.scss';

export const Message = () => (
  <section className="message dark-section">
    <div className="message__content">
      <p className="typescale-7">
        MOTHER OF MUSIC IS A 4-DAY DISCOVERY OF THE AFRICAN RENAISSANCE, SPOTLIGHTING EMERGING
        SOUNDS AND ART IN THE MOTHER CITY.
      </p>
    </div>
    <footer>
      <BannerIcon />
    </footer>
  </section>
);
