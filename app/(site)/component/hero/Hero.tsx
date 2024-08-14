import React from 'react';

import { wideFont } from '../../../constant';

import './hero.scss';

export const Hero = () => (
  <section className="hero dark-section">
    <span className={`typescale-4 ${wideFont.className}`}>MOM: Mother of Music</span>
    <span className={`typescale-4 ${wideFont.className}`}>5 - 8 September, Cape Town</span>
  </section>
);
