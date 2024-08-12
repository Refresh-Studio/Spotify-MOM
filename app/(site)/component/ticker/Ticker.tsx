'use client';

import { useRouter } from 'next/navigation';
import React, { PropsWithChildren, useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';

import './ticker.scss';

interface Props extends PropsWithChildren {
  right?: boolean;
  height?: number;
  speed?: number;
  hollow?: boolean;
  path?: string;
}

export const Ticker = ({
  children,
  right = false,
  height = 40,
  hollow = false,
  speed = 100,
  path
}: Props) => {
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      void router.push(path);
    }
  };

  return (
    <section
      className={`ticker ${hollow ? 'ticker--hollow' : ''}`}
      style={{ height }}
      onClick={handleClick}
    >
      <Marquee autoFill speed={speed} direction={right ? 'right' : 'left'}>
        {children}
      </Marquee>
    </section>
  );
};
