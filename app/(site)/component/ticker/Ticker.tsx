import React, { PropsWithChildren, useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';

import './ticker.scss';

interface Props extends PropsWithChildren {
  right?: boolean;
  height?: number;
  speed?: number;
  hollow?: boolean;
}

export const Ticker = ({
  children,
  right = false,
  height = 40,
  hollow = false,
  speed = 100
}: Props) => (
  <section className={`ticker ${hollow ? 'ticker--hollow' : ''}`} style={{ height }}>
    <Marquee autoFill speed={speed} direction={right ? 'right' : 'left'}>
      {children}
    </Marquee>
  </section>
);
