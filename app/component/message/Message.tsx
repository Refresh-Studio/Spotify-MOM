import React from 'react';

import { ReactComponent as BannerIcon } from '../../asset/banner.svg';

import './message.scss';

export const Message = () => (
  <section className="message dark-section">
    <div className="message__content">
      <p className="typescale-9">
        Mother of Music is a 4-day Discovery of Emerging Sounds and Art from Africa in the Mother
        City.
      </p>
      <p className="typescale-9">Join MOM as she spotlights the African Renaissance.</p>
    </div>
    <footer>
      <BannerIcon />
    </footer>
  </section>
);
