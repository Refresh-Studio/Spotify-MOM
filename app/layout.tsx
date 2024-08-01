'use client';

import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';

import './index.scss';

export const defaultFont = localFont({
  src: [
    {
      path: './style/fonts/SpotifyMix-Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ]
});

export const wideFont = localFont({
  src: [
    {
      path: './style/fonts/SpotifyMixWide-Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ]
});

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="en">
    <body className={defaultFont.className}>
      <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
      {children}
      <div id="embed-iframe">
        <div id="playback"></div>
      </div>
    </body>
  </html>
);

export default RootLayout;
