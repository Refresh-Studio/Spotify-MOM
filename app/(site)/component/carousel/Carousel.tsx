import React from 'react';

import { ReactComponent as FirstImage } from '../../../asset/gallery/first.svg';
import { ReactComponent as SecondImage } from '../../../asset/gallery/second.svg';

import { Ticker } from '../ticker/Ticker';

import './carousel.scss';

export const Carousel = () => {
  return (
    <section className="carousel dark-section">
      <Ticker hollow height={597}>
        <FirstImage />
        <SecondImage />
      </Ticker>
    </section>
  );
};
