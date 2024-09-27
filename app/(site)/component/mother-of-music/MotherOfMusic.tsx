import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import { wideFont } from '../../../constant';

import './mother-of-music.scss';

const images = {
  image1: 'https://i.ibb.co/0C05GPD/image-1.jpg',
  image2: 'https://i.ibb.co/QdFy064/image-2.jpg',
  image3: 'https://i.ibb.co/7XWsKNW/image-3.jpg',
  image4: 'https://i.ibb.co/JkCL4mV/image-4.jpg'
};

export const MotherOfMusic = () => {
  const headerRef = useRef(null);
  const messageRef = useRef(null);
  const containerRef = useRef(null);

  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  const { image1, image2, image3, image4 } = images;

  useEffect(() => {
    AOS.init({ animatedClassName: 'aos-animate' });

    gsap.fromTo(
      secondRef.current,
      {
        zIndex: -1
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center'
        },
        zIndex: 2,
        delay: 3
      }
    );
    gsap.fromTo(
      thirdRef.current,
      {
        zIndex: -1
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center'
        },
        zIndex: 3,
        delay: 3.5
      }
    );
    gsap.fromTo(
      fourthRef.current,
      {
        zIndex: -1
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center'
        },
        zIndex: 4,
        delay: 4
      }
    );

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
      <Image
        width={205}
        height={307}
        alt="Mother of Music event promotion"
        src={image1}
        className="mother-of-music__image"
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="3000"
      />
      <Image
        ref={secondRef}
        width={205}
        height={307}
        alt="Mother of Music event promotion"
        src={image2}
        className="mother-of-music__image mother-of-music__image--other"
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="3000"
      />
      <Image
        ref={thirdRef}
        width={205}
        height={307}
        alt="Mother of Music event promotion"
        src={image3}
        className="mother-of-music__image mother-of-music__image--other"
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="3000"
      />
      <Image
        ref={fourthRef}
        width={205}
        height={307}
        alt="Mother of Music event promotion"
        src={image4}
        className="mother-of-music__image mother-of-music__image--other"
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="3000"
      />
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
