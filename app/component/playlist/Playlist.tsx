import React from 'react';

import { ReactComponent as GlobeIcon } from '../../asset/globe.svg';

import { Track } from './track/Track';

import './playlist.scss';

export const Playlist = () => (
  <section className="playlist">
    <header>
      <p className="typescale-3">
        <GlobeIcon />
        Get to know the artists
      </p>
      <p className="typescale-3">Mom Playlist</p>
    </header>
    <div className="playlist__tracks">
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
    </div>
  </section>
);
