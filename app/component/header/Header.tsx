import Link from 'next/link';
import React from 'react';

import { ReactComponent as InstagramIcon } from '../../asset/instagram.svg';
import { ReactComponent as SpotifyIcon } from '../../asset/spotify.svg';

import './header.scss';

export const Header = () => (
  <header className="header">
    <Link href="https://spotify.com" target="_blank" rel="noreferrer">
      <SpotifyIcon />
    </Link>
    <Link href="https://www.instagram.com/spotifyafrica/?hl=en" target="_blank" rel="noreferrer">
      <InstagramIcon />
    </Link>
  </header>
);
