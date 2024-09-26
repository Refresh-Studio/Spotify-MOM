import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import { wideFont } from '../../../constant';
import SpotifyMomImage from './../../../../public/images/spotify-mom.jpg';

import './mother-of-music.scss';

gsap.registerPlugin(ScrollTrigger);

export const MotherOfMusic = () => {
  const headerRef = useRef(null);
  const messageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({ animatedClassName: 'aos-animate' });

    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center'
        },
        delay: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }
    );

    gsap.fromTo(
      messageRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center'
        },
        delay: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }
    );
  }, []);

  return (
    <section className="mother-of-music" ref={containerRef}>
      <div data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="3000">
        <Image
          width={205}
          alt="Mother of Music event promotion"
          src={SpotifyMomImage}
          className="mother-of-music__image"
        />
      </div>
      <header className="mother-of-music__header">
        <h2 ref={headerRef} className={`typescale-10 ${wideFont.className}`}>
          Mother of music
        </h2>
      </header>
      <div className="mother-of-music__content">
        <p className="typescale-3" ref={messageRef}>
          Mother of Music (MOM) is a four-day event hosted in the Cape Town Peninsula. Featuring a
          local and international lineup with a world-class stage and sound design.
        </p>
      </div>
    </section>
  );
};
