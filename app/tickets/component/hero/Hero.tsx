import React from 'react';

import { Tabs } from '../../../component/tabs/Tabs';

import { wideFont } from '../../../constant';

import './hero.scss';

export const Hero = () => (
  <section className="tickets-hero">
    <h1 className={`typescale-11 ${wideFont.className}`}>
      Tickets <span className="typescale-6">6</span>
    </h1>
    <hr />
    <footer>
      <p className={`typescale-6 ${wideFont.className}`}>About</p>
      <p className="typescale-8">
        Lorem ipsum dolor sit amet consectetur. Eget neque pharetra elementum pulvinar adipiscing.
        Amet arcu porta velit tincidunt maecenas. Hac bibendum in scelerisque.
      </p>
    </footer>
  </section>
);
