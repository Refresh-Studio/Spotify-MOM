import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata, Viewport } from 'next';
import React, { PropsWithChildren } from 'react';

import { Footer } from './component/footer/Footer';
import { Header } from './component/header/Header';

import { defaultFont } from '../constant';

import '../index.scss';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.spotifymom.com'),
  title: 'Spotify | MOM',
  // eslint-disable-next-line quotes
  description:
    'MOTHER OF MUSIC IS A 4-DAY DISCOVERY OF THE AFRICAN RENAISSANCE, SPOTLIGHTING EMERGING SOUNDS AND ART IN THE MOTHER CITY.',
  keywords: [
    'Spotify',
    'Mom',
    'Music',
    'Playlist',
    'Fun',
    'Africa',
    'Cape Town',
    'Events',
    'Party',
    'Arts & Entertainment',
    'Celebrities & Entertainment',
    'Food & Drink',
    'People & Society',
    'Online Communities',
    'Travel'
  ],
  robots: { follow: true, index: true },
  authors: [{ url: 'https://spotify.com', name: 'Spotify' }],
  openGraph: {
    title: 'Spotify | MOM',
    // eslint-disable-next-line quotes
    description:
      'MOTHER OF MUSIC IS A 4-DAY DISCOVERY OF THE AFRICAN RENAISSANCE, SPOTLIGHTING EMERGING SOUNDS AND ART IN THE MOTHER CITY.',
    url: 'https://www.spotifymom.com',
    images: [
      {
        url: 'https://i.ibb.co/j9Cs8Kk/IMG-1929.jpg',
        width: 1200,
        height: 630,
        alt: 'Spotify | MOM'
      }
    ]
  }
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="en">
    <GoogleAnalytics gaId="G-8YT65EB5MC" />
    <body className={`${defaultFont.className} layout`}>
      {/*<div id="smooth-wrapper">*/}
      {/*    <div id="smooth-content">*/}
      <Header />
      {children}
      <Footer />
      {/*    </div>*/}
      {/*</div>*/}
    </body>
  </html>
);

export default RootLayout;
