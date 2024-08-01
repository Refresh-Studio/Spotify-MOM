import React from 'react';

import { wideFont } from '../../layout';

import './banner.scss';

export const Banner = () => (
  <section className="banner">
    <h1 className={`typescale-10 ${wideFont.className}`}>
      Listen to <br /> your mother
    </h1>
  </section>
);
