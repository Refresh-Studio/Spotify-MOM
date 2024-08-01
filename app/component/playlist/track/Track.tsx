import Image from 'next/image';
import React, { useMemo } from 'react';
import { Simulate } from 'react-dom/test-utils';

import { TrackObject } from '../track.interface';

import { ReactComponent as PlayIcon } from '../../../asset/play.svg';
import { ReactComponent as StopIcon } from '../../../asset/stop.svg';

import './track.scss';

interface Props {
  onPlay: (uri: string) => void;
  onStop: () => void;
  track: TrackObject;
  playing: boolean;
}

export const Track = ({ track, onPlay, onStop, playing }: Props) => {
  const togglePlay = () => {
    if (!playing) {
      onPlay(track.uri);
    } else {
      onStop();
    }
  };

  const duration = useMemo(() => {
    const totalSeconds = Math.floor(track?.duration_ms / 1000); // Convert milliseconds to seconds
    const minutes = Math.floor(totalSeconds / 60); // Calculate the number of minutes
    const seconds = totalSeconds % 60; // Calculate the remaining seconds

    return `${minutes}:${seconds}`;
  }, [track?.duration_ms]);

  return (
    <div className={`track ${playing ? 'track--playing' : ''}`}>
      <div>
        <Image src={track.album.images[0].url} alt={track?.name} width={42} height={42} />
        <div className="track__details">
          <h1 className="typescale-3">{track?.name}</h1>
          <p className="typescale-2">{track?.artists?.length > 0 ? track?.artists[0].name : ''}</p>
        </div>
      </div>
      <div className="track__player">
        <p className="typescale-2">{duration}</p>
        <span onClick={togglePlay}>
          {playing && <StopIcon />}
          {!playing && <PlayIcon />}
        </span>
      </div>
    </div>
  );
};
