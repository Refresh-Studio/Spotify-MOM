'use client';

import React, { PropsWithChildren } from 'react';

import { Footer } from './component/footer/Footer';
import { Header } from './component/header/Header';

import { defaultFont } from './constant';

import './index.scss';

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="en">
    <body className={defaultFont.className}>
      <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
