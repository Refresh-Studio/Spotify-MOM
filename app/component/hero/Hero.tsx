'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { ReactComponent as BannerIcon } from '../../asset/banner.svg';
import { ReactComponent as InstagramIcon } from '../../asset/instagram.svg';
import { ReactComponent as SpotifyIcon } from '../../asset/spotify.svg';

import { wideFont } from '../../constant';

import './hero.scss';

export const Hero = () => {
  const targetDate = new Date('August 13, 2024 00:00:00 GMT+0200').getTime();

  const [timeRemaining, setTimeRemaining] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(distance);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <section className="hero">
      <Link href="https://spotify.com" target="_blank" rel="noreferrer">
        <SpotifyIcon />
      </Link>
      <Link href="https://www.instagram.com/spotifyafrica/?hl=en" target="_blank" rel="noreferrer">
        <InstagramIcon />
      </Link>
      <div>
        <p className={`typescale-6 ${wideFont.className}`}>9.24</p>
        <h1 className={`typescale-9 ${wideFont.className}`}>
          <span>Mom</span> is coming home
        </h1>
        <BannerIcon />
        <p className={`typescale-6 ${wideFont.className}`}>Cape Town</p>
      </div>
      <footer>
        <div>
          <span className={`typescale-12 ${wideFont.className}`}>
            {days < 10 ? `0${days}` : days}
          </span>
          <span className="typescale-4">Days</span>
        </div>
        <div>
          <span className={`typescale-12 ${wideFont.className}`}>
            {hours < 10 ? `0${hours}` : hours}
          </span>
          <span className="typescale-4">Hours</span>
        </div>
        <div>
          <span className={`typescale-12 ${wideFont.className}`}>
            {minutes < 10 ? `0${minutes}` : minutes}
          </span>
          <span className="typescale-4">Minutes</span>
        </div>
        <div>
          <span className={`typescale-12 ${wideFont.className}`}>
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
          <span className="typescale-4">Seconds</span>
        </div>
      </footer>
    </section>
  );
};
