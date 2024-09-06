'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { hotjar } from 'react-hotjar';

import { Promotion } from '../../../interface/promotion.interface';

import { ReactComponent as MomIcon } from '../../../asset/mom.svg';
import { ReactComponent as SpotifyIcon } from '../../../asset/spotify.svg';

import { getPromotion } from '../../../../sanity/sanity.query';
import { Button } from '../button/Button';
import { Modal } from '../modal/Modal';

import './header.scss';

export const Header = () => {
  const pathname = usePathname();
  const [inverted, setInverted] = useState<boolean>(false);
  const [pushed, setPushed] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [promotion, setPromotion] = useState<Promotion>();

  useEffect(() => {
    setOpen(true);
    hotjar.initialize({ id: 5081246, sv: 6 });

    const callApi = async () => {
      const promotion = await getPromotion();
      setPromotion(promotion.length > 0 ? promotion[0] : undefined);
    };

    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
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
      <header
        className={`header ${inverted ? 'header--inverted' : ''} ${pushed ? 'header--pushed' : ''}`}
      >
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
          <Link className="typescale-2" href="/albums">
            Gallery
          </Link>
          <Button inverted={inverted} small link="/tickets" label="Get Tickets" />
        </nav>
      </header>
      {promotion && <Modal open={open} setOpen={setOpen} promotion={promotion} />}
    </>
  );
};
