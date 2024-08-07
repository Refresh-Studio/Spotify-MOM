'use client';

import React from 'react';

import { ReactComponent as ViewIcon } from '../../asset/view.svg';

import { Button } from '../button/Button';

import './playlist.scss';

export const Playlist = () => (
  <section className="playlist">
    <div className="playlist__tracks">
      <iframe
        style={{ borderRadius: 12 }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWuGghJUW6Hp?utm_source=generator&theme=0"
        height="746"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
    <footer>
      <Button
        link="https://open.spotify.com/playlist/37i9dQZF1DWWuGghJUW6Hp"
        target="_blank"
        label="View Playlist"
        Icon={ViewIcon}
      />
    </footer>
  </section>
);
