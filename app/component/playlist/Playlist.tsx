'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { TrackDetails } from './track.interface';

import { ReactComponent as GlobeIcon } from '../../asset/globe.svg';
import { ReactComponent as ViewIcon } from '../../asset/view.svg';

import { Track } from './track/Track';

import './playlist.scss';

declare const window: any;

const getPlaylist = async (accessToken: string) => {
  const { data } = await axios.get(
    'https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n?market=ZA',
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );

  return data.tracks.items;
};

interface Props {
  accessToken?: string;
}

export const Playlist = ({ accessToken }: Props) => {
  const [API, setAPI] = useState<any>();
  const [controller, setController] = useState<any>();
  const [tracks, setTracks] = useState<TrackDetails[]>([]);
  const [playingTrack, setPlayingTrack] = useState<string>();

  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
      setAPI(IFrameAPI);
    };
  }, []);

  useEffect(() => {
    const callApi = async () => {
      const tracks = await getPlaylist(accessToken!);
      setTracks(tracks);
    };

    callApi();
  }, [accessToken]);

  const handlePlay = (uri: string) => {
    if (controller) {
      handleStop();
    }

    const element = document.getElementById('playback');
    const playbackElement = document.createElement('div');
    element!.appendChild(playbackElement);

    const options = {
      width: '100%',
      height: '100%',
      background: 'black',
      uri
    };
    const callback = (EmbedController: any) => {
      setController(EmbedController);
      EmbedController.play();
    };
    API.createController(playbackElement, options, callback);
    setPlayingTrack(uri);
  };

  const handleStop = () => {
    controller.destroy();
    setPlayingTrack(undefined);
  };

  return (
    <section className="playlist">
      <header>
        <p className="typescale-3">
          <GlobeIcon />
          Get to know the artists
        </p>
        <p className="typescale-3">Mom Playlist</p>
      </header>
      <div className="playlist__tracks">
        {(tracks ?? []).map(({ track }: TrackDetails) => (
          <Track
            key={track.id}
            track={track}
            onPlay={handlePlay}
            onStop={handleStop}
            playing={playingTrack === track?.uri}
          />
        ))}
      </div>
      <footer>
        <button className="typescale-4">
          View Playlist <ViewIcon />
        </button>
      </footer>
    </section>
  );
};
