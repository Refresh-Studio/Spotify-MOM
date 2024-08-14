import React from 'react';

import { Tabs } from '../../../component/tabs/Tabs';

import { wideFont } from '../../../../constant';

import './hero.scss';

interface Props {
  ticketCount: number;
}

export const Hero = ({ ticketCount }: Props) => (
  <section className="tickets-hero light-section">
    <h1 className={`typescale-11 ${wideFont.className}`}>
      Tickets <span className="typescale-6">{ticketCount}</span>
    </h1>
    <hr />
    <footer>
      <p className={`typescale-6 ${wideFont.className}`}>About</p>
      <p className="typescale-8">
        MOTHER OF MUSIC IS A 4-DAY DISCOVERY OF THE AFRICAN RENAISSANCE, SPOTLIGHTING EMERGING
        SOUNDS AND ART IN THE MOTHER CITY.
      </p>
    </footer>
  </section>
);
