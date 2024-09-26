'use client';

import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { ReactComponent as SpotifyIcon } from '../../asset/spotify.svg';

import firstImage from '../../../public/images/loader/image-1.png';
import secondImage from '../../../public/images/loader/image-2.png';
import thirdImage from '../../../public/images/loader/image-3.png';
import fourthImage from '../../../public/images/loader/image-4.png';
import fifthImage from '../../../public/images/loader/image-5.png';
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

  const footerRef = useRef(null);

  useEffect(() => {
    const updatePercentage = () => {
      gsap.ticker.add(() => {
        const progress = loadingTimeline.progress();
        const newPercentage = Math.round(progress * 100 * 2);

        if (newPercentage > 100) {
          setPercentage(100);
        } else {
          setPercentage(newPercentage);
        }
      });
    };

    loadingTimeline
      .fromTo(
        containerRef.current,
        {
          clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)'
        },
        {
          duration: 1,
          backgroundColor: 'transparent',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
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
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
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
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
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
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
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
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
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
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }
      );

    updatePercentage();

    return () => {
      gsap.ticker.remove(() => updatePercentage());
    };
  }, [loadingTimeline]);

  useEffect(() => {
    gsap.fromTo(
      sixthRef.current,
      { objectPosition: 'initial' },
      { duration: 1, delay: 5.25, objectPosition: '0 -580px' }
    );

    imageTimeline
      .fromTo(
        footerRef.current,
        {
          display: 'flex'
        },
        {
          delay: 4.75,
          display: 'none',
          duration: 0.2
        }
      )
      .fromTo(
        titleRef.current,
        {
          display: 'block'
        },
        {
          display: 'none',
          duration: 0.2
        }
      )
      .fromTo(
        subtitleRef.current,
        {
          display: 'block'
        },
        {
          display: 'none',
          duration: 0.2
        }
      )
      .fromTo(
        containerRef.current,
        {
          width: '380px',
          height: '576px'
        },
        {
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
      <footer ref={footerRef}>
        <p className="typescale-3">Loading</p>
        <p className="typescale-3">{percentage}%</p>
      </footer>
    </section>
  );
};
