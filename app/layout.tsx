'use client';

import { PropsWithChildren } from 'react';

import { defaultFont } from './constant';

import './index.scss';

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
