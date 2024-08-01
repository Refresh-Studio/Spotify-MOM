import Link from 'next/link';
import React from 'react';

import { ReactComponent as BannerIcon } from '../../asset/banner.svg';
import { ReactComponent as InstagramIcon } from '../../asset/instagram.svg';
import { ReactComponent as SpotifyIcon } from '../../asset/spotify.svg';

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
      <p className="typescale-6">9.24</p>
      <h1 className="typescale-9">
        <span>Mom</span> is coming home
      </h1>
      <BannerIcon />
      <p className="typescale-6">Cape Town</p>
    </div>
    <footer>
      <div>
        <span className="typescale-12">09</span>
        <span>Days</span>
      </div>
      <div>
        <span className="typescale-12">09</span>
        <span>Hours</span>
      </div>
      <div>
        <span className="typescale-12">09</span>
        <span>Minutes</span>
      </div>
      <div>
        <span className="typescale-12">09</span>
        <span>Seconds</span>
      </div>
    </footer>
  </section>
);
