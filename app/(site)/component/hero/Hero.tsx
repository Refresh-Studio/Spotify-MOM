import Lottie from 'lottie-react';
import React from 'react';

import { wideFont } from '../../../constant';
import data from './animation.json';

import './hero.scss';

export const Hero = () => (
  <section className="hero dark-section">
    <Lottie animationData={data} loop />
    <span className={`typescale-4 ${wideFont.className}`}>MOM: Mother of Music</span>
    <span className={`typescale-4 ${wideFont.className}`}>5 - 8 September, Cape Town</span>
  </section>
);
