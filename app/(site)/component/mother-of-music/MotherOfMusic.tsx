import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import { wideFont } from '../../../constant';
import SpotifyMomImage from './../../../../public/images/spotify-mom.jpg';

import './mother-of-music.scss';

const MotherOfMusic = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const section = sectionRef.current;

    ScrollTrigger.create({
      trigger: section,
      pin: image,
      start: 'top center',
      end: '+=300',
      scrub: 1,
      pinSpacing: false,
      markers: true
    });
  }, []);

  return (
    <section className="mother-of-music" ref={sectionRef}>
      <Image
        ref={imageRef}
        width={205}
        alt="Mother of Music event promotion"
        src={SpotifyMomImage}
        className="mother-of-music__image"
      />
      <header className="mother-of-music__header" ref={headerRef}>
        <h2 className={`typescale-10 ${wideFont.className}`}>Mother of music</h2>
      </header>
      <div className="mother-of-music__content">
        <p className="typescale-3">
          Mother of Music (MOM) is a four-day event hosted in the Cape Town Peninsula. Featuring a
          local and international lineup with a world-class stage and sound design.
        </p>
      </div>
    </section>
  );
};

export default MotherOfMusic;
