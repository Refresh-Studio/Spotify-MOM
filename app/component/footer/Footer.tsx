'use client';

import Link from 'next/link';
import React from 'react';

import { ReactComponent as InstagramIcon } from '../../asset/instagram.svg';
import { ReactComponent as Logo } from '../../asset/logo.svg';

import './footer.scss';

export const Footer = () => (
  <footer className="footer">
    <Logo />
    <nav>
      <li className="typescale-4">
        <Link href="/tickets">Tickets</Link>
      </li>
      <li className="typescale-4">
        <Link href="/artists">Discover the Artists</Link>
      </li>
    </nav>
    <Link href="https://www.instagram.com/spotifyafrica/?hl=en" target="_blank" rel="noreferrer">
      <InstagramIcon />
    </Link>
    <p className="typescale-4">Copyright 2024 &copy; Spotify</p>
    <p className="typescale-4">All rights reserved</p>
  </footer>
);
