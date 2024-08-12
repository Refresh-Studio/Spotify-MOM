import React from 'react';

import { Tabs } from '../../../component/tabs/Tabs';

import { wideFont } from '../../../../constant';

import './hero.scss';

const TABS = Object.freeze([
  { path: 'all', name: 'All' },
  { path: 'build-up', name: 'Build Up' },
  { path: 'thursday', name: 'First Thursdays' },
  { path: 'friday', name: 'Friday' },
  { path: 'saturday', name: 'Saturday' },
  { path: 'sunday', name: 'Sunday' }
]);

export const Hero = () => (
  <section className="artists-hero light-section">
    <h1 className={`typescale-11 ${wideFont.className}`}>
      The Artists <span className="typescale-6">51</span>
    </h1>
    <Tabs tabs={TABS} />
  </section>
);
