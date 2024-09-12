'use client';

import { useRouter } from 'next/navigation';
import React, { PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';
// import Marquee from 'react-fast-marquee';
import Tickrr from 'react-ticker';

import './ticker.scss';
import gsap, { Power0 } from 'gsap';

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
  const [currentSpeed, setCurrentSpeed] = useState<number>(3);

  const tickerRef = useRef<HTMLDivElement>(null);
  const tickerWrapperRef = useRef<HTMLDivElement>(null);
  const tickerItemsRef = useRef<HTMLDivElement>(null);

  const timeline = useMemo(() => gsap.timeline({ repeat: -1 }), []);

  useEffect(() => {
    if(tickerRef.current && tickerWrapperRef.current && tickerItemsRef.current){
      const tickerWidth = tickerRef.current.offsetWidth;
      const tickerItemsWidth = tickerItemsRef.current.offsetWidth;

      const tickerItemsClone = tickerItemsRef.current.cloneNode(true);
      tickerRef.current.appendChild(tickerItemsClone as Node);

      const speed = 100;

      timeline.fromTo(tickerWrapperRef.current, {
        xPercent: tickerWidth / tickerItemsWidth / 2 * 100
      }, {
        xPercent: 0,
        duration: tickerWidth / speed,
        ease: 'none'
      }).to(tickerWrapperRef.current, {
        xPercent: -50,
        ease: 'none',
        duration: tickerItemsWidth / speed
      });

      // right && timeline.reverse();
    }
  }, [timeline, tickerRef, tickerWrapperRef, tickerItemsRef]);

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
      ref={tickerRef}
      // onMouseEnter={() => timeline.duration(10)}
      // onMouseLeave={() => timeline.duration(5)}
    >
      {/* <Marquee autoFill speed={currentSpeed} direction={right ? 'right' : 'left'}>
        {children}
      </Marquee> */}
      <div ref={tickerWrapperRef}>
        <div ref={tickerItemsRef}>
          {children}
        </div>
      </div>

    </section>
  );
};
