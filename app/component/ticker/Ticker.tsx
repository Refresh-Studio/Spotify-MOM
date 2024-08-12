import React, { PropsWithChildren, useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';

import './ticker.scss';

interface Props extends PropsWithChildren {
  speed?: number;
}

export const Ticker = ({ children, speed = 1 }: Props) => (
  <section className="ticker">
    <Marquee autoFill speed={100}>
      {children}
    </Marquee>
  </section>
);
