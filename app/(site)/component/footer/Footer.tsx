'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { ReactComponent as InstagramIcon } from '../../../asset/instagram.svg';
import { ReactComponent as LogoSmall } from '../../../asset/logo-small.svg';
import { ReactComponent as Logo } from '../../../asset/logo.svg';

import './footer.scss';

export const Footer = () => {
  const pathName = usePathname();

  return (
    <footer className="footer">
      <Logo className="footer__logo" />
      <LogoSmall className="footer__logo-small" />
      <nav>
        <li className="typescale-4">
          <Link href="/tickets">Tickets</Link>
        </li>
        <li className="typescale-4">
          <Link href="/artists">Discover the Artists</Link>
        </li>
        <li className="typescale-4">
          <Link href="/albums">Gallery</Link>
        </li>
      </nav>
      <Link href="https://www.instagram.com/spotifyafrica/?hl=en" target="_blank" rel="noreferrer">
        <InstagramIcon />
      </Link>
      <p className="typescale-2">Copyright 2024 &copy; Spotify</p>
      <p className="typescale-2">All rights reserved</p>
      <nav className="footer__mobile-nav">
        <li
          className={`typescale-2 footer__mobile-nav-item ${pathName === '/' ? 'footer__mobile-nav-item--active' : ''}`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`typescale-2 footer__mobile-nav-item ${pathName === '/artists' ? 'footer__mobile-nav-item--active' : ''}`}
        >
          <Link href="/artists">Artists</Link>
        </li>
        <li
          className={`typescale-2 footer__mobile-nav-item ${pathName === '/tickets' ? 'footer__mobile-nav-item--active' : ''}`}
        >
          <Link href="/tickets">Tickets</Link>
        </li>
        <li
          className={`typescale-2 footer__mobile-nav-item ${pathName === '/albums' ? 'footer__mobile-nav-item--active' : ''}`}
        >
          <Link href="/albums">Gallery</Link>
        </li>
      </nav>
    </footer>
  );
};
