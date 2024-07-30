import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import './index.scss';

export const metadata: Metadata = {
  title: 'Spotify MOM',
  description: 'Spotify MOM'
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
