import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import './index.scss';

export const metadata: Metadata = {
  title: 'Spotify MOM',
  description: 'Spotify MOM'
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="en">
    <body>
      <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
      {children}
      <div id="embed-iframe">
        <div id="playback"></div>
      </div>
    </body>
  </html>
);

export default RootLayout;
