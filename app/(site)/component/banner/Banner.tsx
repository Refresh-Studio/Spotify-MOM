import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useMemo, useRef } from 'react';

import { wideFont } from '../../../constant';

import './banner.scss';

gsap.registerPlugin(ScrollTrigger);

export const Banner = () => {
  const bannerRef = useRef<HTMLElement>(null);

  const timeline = useMemo(
    () =>
      gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top bottom',
          end: 'top top',
          toggleActions: 'restart pause resume pause',
          scrub: true
        }
      }),
    []
  );

  useEffect(() => {
    timeline.fromTo(
      bannerRef.current,
      {
        transform: 'scale(1.3, 1.3)'
      },
      {
        transform: 'scale(1, 1)'
      },
      0
    );
  }, [timeline]);

  return (
    <section className="banner" ref={bannerRef}>
      <div>
        <h1 className={`typescale-8 ${wideFont.className}`}>
          DISCOVER. EMERGING. <br /> COMMUNITY.
        </h1>
      </div>
    </section>
  );
};
