import Link from 'next/link';
import React from 'react';

import { ReactComponent as BannerIcon } from '../../asset/banner.svg';
import { ReactComponent as InstagramIcon } from '../../asset/instagram.svg';
import { ReactComponent as SpotifyIcon } from '../../asset/spotify.svg';

import { wideFont } from '../../layout';

import './hero.scss';

export const Hero = () => (
  <section className="hero">
    <Link href="https://spotify.com" target="_blank" rel="noreferrer">
      <SpotifyIcon />
    </Link>
    <Link href="https://instagram.com" target="_blank" rel="noreferrer">
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
        <span className={`typescale-12 ${wideFont.className}`}>09</span>
        <span className="typescale-4">Days</span>
      </div>
      <div>
        <span className={`typescale-12 ${wideFont.className}`}>01</span>
        <span className="typescale-4">Hours</span>
      </div>
      <div>
        <span className={`typescale-12 ${wideFont.className}`}>04</span>
        <span className="typescale-4">Minutes</span>
      </div>
      <div>
        <span className={`typescale-12 ${wideFont.className}`}>22</span>
        <span className="typescale-4">Seconds</span>
      </div>
    </footer>
  </section>
);
