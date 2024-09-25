'use client';

import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { ReactComponent as SpotifyIcon } from '../../asset/spotify.svg';

import firstImage from '../../../public/images/loader/image-1.jpg';
import secondImage from '../../../public/images/loader/image-2.jpg';
import thirdImage from '../../../public/images/loader/image-3.jpg';
import fourthImage from '../../../public/images/loader/image-4.jpg';
import fifthImage from '../../../public/images/loader/image-5.jpg';
import sixthImage from '../../../public/images/loader/image-6.jpg';

import './loading.scss';

interface Props {
  onComplete: () => void;
}

export const LoadingPage = ({ onComplete }: Props) => {
  const [percentage, setPercentage] = useState<number>(0);

  const loadingTimeline = useMemo(() => gsap.timeline({ paused: false }), []);

  const mainContainerRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const fifthRef = useRef(null);
  const sixthRef = useRef(null);
  const imageTimeline = useMemo(() => gsap.timeline({ paused: false }), []);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textTimeline = useMemo(() => gsap.timeline({ paused: false }), []);

  useEffect(() => {
    setPercentage(12);
    loadingTimeline
      .fromTo(
        containerRef.current,
        {
          clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)'
        },
        {
          duration: 1,
          backgroundColor: 'transparent',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          onComplete: () => setPercentage(22)
        }
      )
      .fromTo(
        secondRef.current,
        {
          zIndex: 2,
          clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)'
        },
        {
          zIndex: 3,
          duration: 0.75,
          backgroundColor: 'transparent',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          onComplete: () => setPercentage(36)
        }
      )
      .fromTo(
        thirdRef.current,
        {
          zIndex: 4,
          clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)'
        },
        {
          zIndex: 5,
          duration: 0.75,
          backgroundColor: 'transparent',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          onComplete: () => setPercentage(49)
        }
      )
      .fromTo(
        fourthRef.current,
        {
          zIndex: 4,
          clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)'
        },
        {
          zIndex: 5,
          duration: 0.75,
          backgroundColor: 'transparent',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          onComplete: () => setPercentage(61)
        }
      )
      .fromTo(
        fifthRef.current,
        {
          zIndex: 4,
          clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)'
        },
        {
          zIndex: 5,
          duration: 0.75,
          backgroundColor: 'transparent',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          onComplete: () => setPercentage(88)
        }
      )
      .fromTo(
        sixthRef.current,
        {
          zIndex: 4,
          clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)'
        },
        {
          zIndex: 5,
          duration: 0.75,
          backgroundColor: 'transparent',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          onComplete: () => setPercentage(100)
        }
      );
  }, [loadingTimeline]);

  useEffect(() => {
    gsap.fromTo(mainContainerRef.current, { paddingTop: '5%' }, { paddingTop: 0, delay: 4.75 });
    gsap.fromTo(
      thirdRef.current,
      { objectPosition: 'initial' },
      { duration: 0.5, ease: 'power2.in', objectPosition: '0 -580px', delay: 4.75 }
    );

    imageTimeline.fromTo(
      containerRef.current,
      {
        width: '380px',
        height: '576px'
      },
      {
        delay: 4.75,
        width: '100vw',
        height: '100vh',
        duration: 1,
        onComplete
      }
    );
  }, [imageTimeline]);

  useEffect(() => {
    textTimeline
      .fromTo(
        titleRef.current,
        { marginTop: 24, opacity: 0, y: 50 },
        {
          marginTop: 24,
          delay: 1,
          duration: 0.3,
          opacity: 1,
          y: 0
        }
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        {
          delay: 0.45,
          duration: 0.3,
          opacity: 1,
          y: 0
        }
      );
  }, [textTimeline]);

  return (
    <section className="loading">
      <header>
        <SpotifyIcon />
      </header>
      <div ref={mainContainerRef}>
        <div ref={containerRef}>
          <Image priority ref={imageRef} src={firstImage} alt="image" width={380} height={576} />
          <Image priority ref={secondRef} src={secondImage} alt="image" width={380} height={576} />
          <Image priority ref={thirdRef} src={thirdImage} alt="image" width={380} height={576} />
          <Image priority ref={fourthRef} src={fourthImage} alt="image" width={380} height={576} />
          <Image priority ref={fifthRef} src={fifthImage} alt="image" width={380} height={576} />
          <Image priority ref={sixthRef} src={sixthImage} alt="image" width={380} height={576} />
        </div>
        <p ref={titleRef} className="typescale-3">
          MOM: Mother of Music
        </p>
        <p ref={subtitleRef} className="typescale-3">
          6 - 8 September, Cape Town
        </p>
      </div>
      <footer>
        <p className="typescale-3">Loading</p>
        <p className="typescale-3">{percentage}%</p>
      </footer>
    </section>
  );
};
