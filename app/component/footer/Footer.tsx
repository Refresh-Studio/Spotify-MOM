'use client';

import Link from 'next/link';
import React from 'react';

import { ReactComponent as InstagramIcon } from '../../asset/instagram.svg';

import './footer.scss';

export const Footer = () => (
  <footer className="footer">
    <p className="typescale-2">Copyright &copy; Spotify</p>

    <Link href="https://www.instagram.com/spotifyafrica/?hl=en" target="_blank" rel="noreferrer">
      <InstagramIcon />
    </Link>
  </footer>
);
