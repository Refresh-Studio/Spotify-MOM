'use client';

import gsap from 'gsap-trial';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { ReactComponent as SpotifyIcon } from '../../asset/spotify.svg';

import './loading.scss';

interface Props {
  onComplete: () => void;
}

export const LoadingPage = ({ onComplete }: Props) => {
  const [percentage, setPercentage] = useState<number>(0);

  const loadingTimeline = useMemo(() => gsap.timeline({ paused: false }), []);

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
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
          onComplete: () => setPercentage(39)
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
          onComplete: () => setPercentage(84)
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
          onComplete: () => setPercentage(100)
        }
      );
  }, [loadingTimeline]);

  useEffect(() => {
    imageTimeline.fromTo(
      containerRef.current,
      {
        width: '380px',
        height: '576px'
      },
      {
        delay: 5,
        width: '100vw',
        height: '100vh',
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
      <div>
        <div ref={containerRef}>
          <img ref={imageRef} src="/images/loader/image.jpg" alt="image" width={380} height={576} />
          <img
            ref={secondRef}
            src="/images/loader/second.jpg"
            alt="image"
            width={380}
            height={576}
          />
          <img ref={thirdRef} src="/images/loader/third.jpg" alt="image" width={380} height={576} />
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
