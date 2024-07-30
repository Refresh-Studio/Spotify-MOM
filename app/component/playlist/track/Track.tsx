import React from 'react';

import { ReactComponent as PlayIcon } from '../../../asset/play.svg';
import { ReactComponent as TrackIcon } from '../../../asset/track.svg';

import './track.scss';

export const Track = () => (
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
