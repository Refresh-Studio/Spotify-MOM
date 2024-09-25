'use client';

import gsap from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { hotjar } from 'react-hotjar';

import { ReactComponent as MomIcon } from '../../../asset/mom.svg';
import { ReactComponent as SpotifyIcon } from '../../../asset/spotify.svg';

import { Button } from '../button/Button';

import './header.scss';

export const Header = () => {
  const pathname = usePathname();
  const [, setInverted] = useState<boolean>(false);
  const [pushed, setPushed] = useState<boolean>(false);

  const ref = useRef(null);

  useEffect(() => {
    hotjar.initialize({ id: 5081246, sv: 6 });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: -50 },
      {
        delay: 1.5,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }
    );

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let found = false;
      let foundPush = false;

      if (sections.length === 0) {
        if (pathname.includes('/albums/')) {
          setInverted(false);
        }

        return;
      }

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 40 && rect.bottom >= 40) {
          if (section.classList.contains('ticker-initial')) {
            setPushed(true);
            foundPush = true;
          }
        }

        if (rect.top <= 80 && rect.bottom >= 80) {
          if (section.classList.contains('light-section')) {
            setInverted(true);
          } else if (section.classList.contains('dark-section')) {
            setInverted(false);
          }
          found = true;
        }
      });

      if (!foundPush) {
        setPushed(false);
      }

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
      <header className={`header ${pushed ? 'header--pushed' : ''}`} ref={ref}>
        <Link className="mom" href="/">
          <MomIcon />
        </Link>
        <Link href="/" className="header__social">
          <SpotifyIcon />
        </Link>
        <nav>
          <NavItem title="Discover Artists" path="/artists" />
          <NavItem title="Gallery" path="/albums" />
          <Button light small link="/tickets" label="Get Tickets" />
        </nav>
      </header>
    </>
  );
};

interface ItemProps {
  title: string;
  path: string;
}

const NavItem = ({ title, path }: ItemProps) => {
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
    <Link
      className="typescale-2"
      href={path}
      onMouseEnter={() => animate()}
      onMouseLeave={() => animate(true)}
    >
      {title}
      <span className="nav-underline" ref={underlineRef} />
    </Link>
  );
};
