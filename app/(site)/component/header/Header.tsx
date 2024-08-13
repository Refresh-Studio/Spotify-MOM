'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { ReactComponent as MomIcon } from '../../../asset/mom.svg';
import { ReactComponent as SpotifyIcon } from '../../../asset/spotify.svg';
import { ReactComponent as ViewIcon } from '../../../asset/view.svg';

import { Button } from '../button/Button';

import './header.scss';

export const Header = () => {
  const pathname = usePathname();
  const [inverted, setInverted] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let found = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 40 && rect.bottom >= 40) {
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
    <header className={`header ${inverted ? 'header--inverted' : ''}`}>
      <Link className="mom" href="/">
        <MomIcon />
      </Link>
      <Link
        href="https://open.spotify.com/playlist/37i9dQZF1DWWuGghJUW6Hp"
        target="_blank"
        rel="noreferrer"
        className="header__social"
      >
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
};
