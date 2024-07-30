import React from 'react';

import { ReactComponent as GlobeIcon } from '../../asset/globe.svg';
import { ReactComponent as PlayIcon } from '../../asset/play.svg';
import { ReactComponent as TrackIcon } from '../../asset/track.svg';

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

const Track = () => (
  <div className="track">
    <div>
      <TrackIcon />
      <div className="track__details">
        <h1 className="typescale-3">Gash Light 101</h1>
        <p className="typescale-2">Burna Boy</p>
      </div>
    </div>
    <div className="track__player">
      <p className="typescale-2">2:30</p>
      <span>
        <PlayIcon />
      </span>
    </div>
  </div>
);
