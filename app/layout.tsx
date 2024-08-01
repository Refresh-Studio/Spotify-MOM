import { Metadata, Viewport } from 'next';
import Head from 'next/head';
import React, { PropsWithChildren } from 'react';

import { Footer } from './component/footer/Footer';
import { Header } from './component/header/Header';

import { defaultFont } from './constant';

import './index.scss';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
};

export const metadata: Metadata = {
  title: 'Spotify | MOM',
  description: "Get ready for a special announcement from Spotify Africa: 'Mom is Coming Home'."
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="en">
    <body className={defaultFont.className}>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
