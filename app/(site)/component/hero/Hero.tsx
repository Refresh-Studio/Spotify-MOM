import gsap from 'gsap';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';

import { wideFont } from '../../../constant';
import { Filigree } from '../filigree/Filigree';
import { MousePosition } from '../filigree/FiligreeModel';

import './hero.scss';

export const Hero = () => {
  const momRef = useRef(null);
  const dateRef = useRef(null);
  const locationRef = useRef(null);

  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    gsap.fromTo(
      momRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        delay: 2,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }
    );
    gsap.fromTo(
      dateRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        delay: 2,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }
    );
    gsap.fromTo(
      locationRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        delay: 2,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }
    );
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    setMousePosition({
      x: event.clientX / window.innerWidth - 0.5, // Normalized mouse X
      y: event.clientY / window.innerHeight - 0.5 // Normalized mouse Y
    });
  };

  return (
    <section className="hero dark-section" onMouseMove={handleMouseMove}>
      <span ref={momRef} className={`typescale-4 ${wideFont.className}`}>
        MOM: Mother of Music
      </span>
      <span ref={dateRef} className={`typescale-4 ${wideFont.className}`}>
        5 - 8 September, Cape Town
      </span>
      <Filigree mousePosition={mousePosition} />
      <span ref={locationRef} className={`typescale-4 ${wideFont.className}`}>
        5 - 8 September, Cape Town
      </span>
    </section>
  );
};
