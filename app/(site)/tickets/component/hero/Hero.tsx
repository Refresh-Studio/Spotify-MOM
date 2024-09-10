'use client';

import React from 'react';

import { wideFont } from '../../../../constant';

import './hero.scss';

interface Props {
  eventCount: number;
}

export const Hero = ({ eventCount }: Props) => (
  <section className="tickets-hero dark-section">
    <h1 className={`typescale-10 ${wideFont.className}`}>
      Tickets
      <span className="typescale-5">{eventCount}</span>
    </h1>
    <hr />
  </section>
);
