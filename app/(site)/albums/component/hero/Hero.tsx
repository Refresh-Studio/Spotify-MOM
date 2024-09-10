import React from 'react';

import { wideFont } from '../../../../constant';

import './hero.scss';

export const Hero = () => (
  <section className="gallery-hero dark-section">
    <h1 className={`typescale-10 ${wideFont.className}`}>Gallery</h1>
    <p className="typescale-3">Relive the magic of MOM through her lens.</p>
  </section>
);
