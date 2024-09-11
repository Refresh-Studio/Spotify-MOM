import React from 'react';

import { ReactComponent as GridIcon } from '../../../../asset/grid.svg';
import { ReactComponent as ListIcon } from '../../../../asset/list.svg';

import { wideFont } from '../../../../constant';

import './hero.scss';

type DisplayState = 'grid' | 'list';
interface Props {
  albumCount: number;
  displayState: string;
  // eslint-disable-next-line no-unused-vars
  handleDisplayState: (state: DisplayState) => void;
}

export const Hero = ({ albumCount, handleDisplayState, displayState }: Props) => (
  <section className="gallery-hero dark-section">
    <div>
      <h1 className={`typescale-10 ${wideFont.className}`}>
        Gallery
        <span className="typescale-5">{albumCount}</span>
      </h1>
      <div>
        <span
          className={`gallery-hero__icon ${displayState === 'grid' ? 'gallery-hero__icon--active' : ''}`}
          onClick={() => handleDisplayState('grid')}
        >
          <GridIcon />
        </span>
        <span
          className={`gallery-hero__icon ${displayState === 'list' ? 'gallery-hero__icon--active' : ''}`}
          onClick={() => handleDisplayState('list')}
        >
          <ListIcon />
        </span>
      </div>
    </div>
    <hr />
  </section>
);
