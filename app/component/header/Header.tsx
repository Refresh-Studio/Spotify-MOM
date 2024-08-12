import Link from 'next/link';
import React from 'react';

import { ReactComponent as MomIcon } from '../../asset/mom.svg';
import { ReactComponent as SpotifyIcon } from '../../asset/spotify.svg';
import { ReactComponent as ViewIcon } from '../../asset/view.svg';

import { Button } from '../button/Button';

import './header.scss';

export const Header = () => (
  <header className="header">
    <Link className="mom" href="/">
      <MomIcon />
    </Link>
    <Link href="https://spotify.com" target="_blank" rel="noreferrer" className="header__social">
      <SpotifyIcon />
    </Link>
    <nav>
      <Link className="typescale-3" href="/artists">
        Discover the Artists
      </Link>
      <Button small link="/tickets" label="Get Tickets" icon={<ViewIcon />} />
    </nav>
  </header>
);
