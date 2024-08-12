import React from 'react';

import { wideFont } from '../../constant';

import './banner.scss';

export const Banner = () => (
  <section className="banner">
    <div>
      <h1 className={`typescale-9 ${wideFont.className}`}>
        DISCOVER. EMERGING. <br /> COMMUNITY.
      </h1>
    </div>
  </section>
);
