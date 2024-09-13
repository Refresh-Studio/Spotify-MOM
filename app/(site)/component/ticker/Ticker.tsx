'use client';

import { useRouter } from 'next/navigation';
import React, { PropsWithChildren } from 'react';
import Marquee from 'react-fast-marquee';

import './ticker.scss';

interface Props extends PropsWithChildren {
  id?: string;
  right?: boolean;
  height?: number;
  speed?: number;
  hollow?: boolean;
  path?: string;
  pausedOnHover?: boolean;
}

export const Ticker = ({
  id,
  children,
  right = false,
  height = 40,
  hollow = false,
  speed = 100,
  path,
  pausedOnHover = false
}: Props) => {
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      void router.push(path);
    }
  };

  return (
    <section
      className={`ticker ticker-${id} ${hollow ? 'ticker--hollow' : ''}`}
      style={{ height }}
      onClick={handleClick}
    >
      <Marquee
        pauseOnHover={pausedOnHover}
        autoFill
        speed={speed}
        direction={right ? 'right' : 'left'}
      >
        {children}
      </Marquee>
    </section>
  );
};
