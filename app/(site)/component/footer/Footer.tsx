'use client';

import gsap from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useMemo, useRef } from 'react';

import { ReactComponent as InstagramIcon } from '../../../asset/instagram.svg';
import { ReactComponent as LogoSmall } from '../../../asset/logo-small.svg';
import { ReactComponent as Logo } from '../../../asset/logo.svg';

import './footer.scss';

const footerNavItems = [
  {
    label: 'Tickets',
    link: '/tickets'
  },
  {
    label: 'Discover the Artists',
    link: '/artists'
  },
  {
    label: 'Gallery',
    link: '/albums'
  }
];

export const Footer = () => {
  const pathName = usePathname();

  return (
    <footer className="footer">
      <Logo className="footer__logo" />
      <LogoSmall className="footer__logo-small" />
      <nav>
        {footerNavItems.map((item) => (
          <FooterNavItem key={item.label + item.link} label={item.label} link={item.link} />
        ))}
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

interface FooterNavItemProps {
  label: string;
  link: string;
}

export const FooterNavItem = ({ label, link }: FooterNavItemProps) => {
  const underlineRef = useRef(null);
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);

  useEffect(() => {
    timeline.fromTo(
      underlineRef.current,
      { duration: 0.3, width: '0%', left: '0%' },
      { duration: 0.3, width: '100%' }
    );
  }, [timeline]);

  const animate = (reverse?: boolean) => {
    if (reverse) {
      timeline.reverse();
      return;
    }

    timeline.play();
  };

  return (
    <li className="typescale-2" onMouseEnter={() => animate()} onMouseLeave={() => animate(true)}>
      <Link href={link}>{label}</Link>
      <span className="nav-underline" ref={underlineRef} />
    </li>
  );
};
