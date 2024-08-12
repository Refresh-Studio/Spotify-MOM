import React from 'react';

import { Tabs } from '../../../component/tabs/Tabs';

import { wideFont } from '../../../constant';

import './hero.scss';

export const Hero = () => (
  <section className="artists-hero">
    <h1 className={`typescale-11 ${wideFont.className}`}>
      The Artists <span className="typescale-6">51</span>
    </h1>
    <Tabs />
  </section>
);
