'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { hotjar } from 'react-hotjar';

import { ReactComponent as MomIcon } from '../../../asset/mom.svg';
import { ReactComponent as SpotifyIcon } from '../../../asset/spotify.svg';
import { ReactComponent as ViewIcon } from '../../../asset/view.svg';

import { Button } from '../button/Button';
import { Ticker } from '../ticker/Ticker';
import { GetTickets } from '../ticker/tickets/GetTickets';

import './header.scss';

export const Header = () => {
  const pathname = usePathname();
  const [inverted, setInverted] = useState<boolean>(false);

  useEffect(() => {
    hotjar.initialize({ id: 5081246, sv: 6 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let found = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          if (section.classList.contains('light-section')) {
            setInverted(true);
          } else if (section.classList.contains('dark-section')) {
            setInverted(false);
          }
          found = true;
        }
      });

      if (!found) {
        setInverted(true);
      }
    };

    handleScroll();

    document.body.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <Ticker path="/tickets" speed={75}>
        <GetTickets />
      </Ticker>
      <header className={`header ${inverted ? 'header--inverted' : ''}`}>
        <Link className="mom" href="/">
          <MomIcon />
        </Link>
        <Link href="/" className="header__social">
          <SpotifyIcon />
        </Link>
        <nav>
          <Link className="typescale-2" href="/artists">
            Discover the Artists
          </Link>
          <Button inverted={inverted} small link="/tickets" label="Get Tickets" />
        </nav>
      </header>
    </>
  );
};
