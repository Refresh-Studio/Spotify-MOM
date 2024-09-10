'use client';

import { useRouter } from 'next/navigation';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

import './ticker.scss';

interface Props extends PropsWithChildren {
  id?: string;
  right?: boolean;
  height?: number;
  speed?: number;
  hollow?: boolean;
  path?: string;
}

export const Ticker = ({
  id,
  children,
  right = false,
  height = 40,
  hollow = false,
  speed = 100,
  path
}: Props) => {
  const router = useRouter();
  const [currentSpeed, setCurrentSpeed] = useState<number>(speed);

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
      onMouseEnter={() => setCurrentSpeed(speed - 0.005)}
      onMouseLeave={() => setCurrentSpeed(speed)}
    >
      <Marquee autoFill speed={currentSpeed} direction={right ? 'right' : 'left'}>
        {children}
      </Marquee>
    </section>
  );
};
