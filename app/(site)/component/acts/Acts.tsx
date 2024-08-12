import React from 'react';

import { wideFont } from '../../../constant';
import { Button } from '../button/Button';
import { Ticker } from '../ticker/Ticker';
import { Artist } from '../ticker/artists/Artist';
import { GetTickets } from '../ticker/tickets/GetTickets';

import './acts.scss';

export const Acts = () => (
  <section className="acts">
    <header>
      <div>
        <p className={`typescale-6 ${wideFont.className}`}>
          <span>More than 50</span> acts
        </p>
        <p className={`typescale-6 ${wideFont.className}`}>
          <span>4</span> venues
        </p>
        <p className={`typescale-6 ${wideFont.className}`}>
          <span>4</span> days
        </p>
      </div>
      <Button small link="/artists" label="View All Artists" />
    </header>
    <main>
      <Ticker hollow height={77} speed={10}>
        <Artist />
      </Ticker>
      <Ticker hollow height={77} right speed={10}>
        <Artist />
      </Ticker>
      <Ticker hollow height={77} speed={10}>
        <Artist />
      </Ticker>
    </main>
  </section>
);
