import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata, Viewport } from 'next';
import React, { PropsWithChildren } from 'react';

import { Footer } from './component/footer/Footer';
import { Header } from './component/header/Header';

import { defaultFont } from './constant';
import openGraphImage from './opengraph-image.jpg';

import './index.scss';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.spotifymom.com'),
  title: 'Spotify | MOM',
  description: "Get ready for a special announcement from Spotify Africa: 'Mom is Coming Home'.",
  openGraph: {
    title: 'Spotify | MOM',
    description: "Get ready for a special announcement from Spotify Africa: 'Mom is Coming Home'.",
    url: 'https://www.spotifymom.com',
    images: [
      {
        url: 'https://i.ibb.co/MkdJSpd/Open-graph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spotify | MOM',
        href: 'https://www.spotifymom.com'
      }
    ]
  }
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="en">
    <GoogleAnalytics gaId="G-8YT65EB5MC" />
    <body className={defaultFont.className}>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
