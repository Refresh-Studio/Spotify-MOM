import React, { useState } from 'react';

import { ReactComponent as GridIcon } from '../../../../asset/grid.svg';
import { ReactComponent as ListIcon } from '../../../../asset/list.svg';

import { wideFont } from '../../../../constant';

import './hero.scss';

interface Props {
  albumCount: number;
}

type DisplayState = 'grid' | 'list';

export const Hero = ({ albumCount }: Props) => {
  const [displayState, setDisplayState] = useState<DisplayState>('grid');

  const handleDisplayState = (state: DisplayState) => {
    setDisplayState(state);
  };

  return (
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
};
