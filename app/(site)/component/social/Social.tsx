import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useMemo, useRef, useState } from 'react';

import { CarouselImage } from '../../../interface/gallery/carousel-image.interface';

import { getCarouselImages } from '../../../../sanity/sanity.query';
import { ResponsiveImage } from '../carousel/ResponsiveImage';

import './social.scss';

export const Social = () => {
  const [images, setImages] = useState<CarouselImage[]>([]);

  const topBorderRef = useRef<HTMLSpanElement>(null);
  const rightBorderRef = useRef<HTMLSpanElement>(null);
  const bottomBorderRef = useRef<HTMLSpanElement>(null);
  const leftBorderRef = useRef<HTMLSpanElement>(null);

  const hoverTimeline = useMemo(
    () =>
      gsap.timeline({
        paused: true
      }),
    []
  );

  const scrollContainerRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const scrollItemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const images = await getCarouselImages();
      setImages(images);
    };

    callApi();
  }, []);

  const scrollTimeline = useMemo(
    () =>
      gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: 'top bottom+=5%',
          end: 'bottom top-=5%',
          scrub: true,
          toggleActions: 'restart pause resume pause'
        }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scrollContainerRef.current]
  );

  useGSAP(() => {
    scrollTimeline.fromTo(
      scrollItemRefs.current,
      {
        yPercent: () => gsap.utils.random(100, 1000),
        filter: 'brightness(50%)'
      },
      {
        yPercent: () => gsap.utils.random(-1000, -100),
        filter: 'brightness(10%)'
      },
      0
    );
  }, [scrollTimeline, images]);

  useEffect(() => {
    hoverTimeline
      .fromTo(
        topBorderRef.current,
        {
          duration: 0.5,
          width: '0%'
        },
        {
          duration: 0.5,
          width: '100%',
          background: 'linear-gradient(to right, #f036a4, #f0c4d9)'
        }
      )
      .fromTo(
        rightBorderRef.current,
        {
          duration: 0.5,
          height: '0%'
        },
        {
          duration: 0.5,
          height: '100%',
          backgroundColor: '#f0c4d9'
        }
      )
      .fromTo(
        bottomBorderRef.current,
        {
          duration: 0.5,
          width: '0%'
        },
        {
          duration: 0.5,
          width: '100%',
          background: 'linear-gradient(to left, #f0c4d9, #f036a4)'
        }
      )
      .fromTo(
        leftBorderRef.current,
        {
          duration: 0.5,
          height: '0%'
        },
        {
          duration: 0.5,
          height: '100%',
          backgroundColor: '#f036a4'
        }
      );
  }, [hoverTimeline]);

  return (
    <section ref={scrollContainerRef} className="social">
      <div ref={scrollWrapperRef}>
        {images.map((image) => (
          <div
            key={image._id}
            ref={(element) => {
              if (element && !scrollItemRefs.current.includes(element)) {
                scrollItemRefs.current.push(element);
              }
            }}
          >
            <ResponsiveImage src={image.src} alt={image.name} />
          </div>
        ))}
      </div>
      <div>
        <p className="typescale-3">FOLLOW US ON INSTAGRAM</p>
        <div onMouseEnter={() => hoverTimeline.play()} onMouseLeave={() => hoverTimeline.reverse()}>
          <a
            className="typescale-7"
            href="https://www.instagram.com/spotifyafrica/"
            target="_blank"
          >
            @SPOTIFYAFRICA
          </a>
          <span ref={topBorderRef} />
          <span ref={rightBorderRef} />
          <span ref={bottomBorderRef} />
          <span ref={leftBorderRef} />
        </div>
      </div>
    </section>
  );
};
