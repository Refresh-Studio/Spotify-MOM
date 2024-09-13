import gsap from 'gsap';
import { useEffect, useMemo, useRef } from 'react';

import './social.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ResponsiveImage } from '../carousel/ResponsiveImage';

const images = [
  'https://dummyimage.com/400x300/00ff00/000',
  'https://dummyimage.com/600x400/0000ff/fff',
  'https://dummyimage.com/800x600/ff0000/fff',
  'https://dummyimage.com/200x200/ff00ff/fff',
  'https://dummyimage.com/600x400/0000ff/fff',
  'https://dummyimage.com/800x600/ff0000/fff',
  'https://dummyimage.com/600x400/0000ff/fff',
  'https://dummyimage.com/800x600/ff0000/fff'
];

export const Social = () => {
  const topBorderRef = useRef(null);
  const rightBorderRef = useRef(null);
  const bottomBorderRef = useRef(null);
  const leftBorderRef = useRef(null);

  const imagesRef = useRef<HTMLElement[]>([]);

  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);

  gsap.registerPlugin(ScrollTrigger);

  // ScrollTrigger.normalizeScroll(true);

  useEffect(() => {
    // ScrollSmoother.create({
    //   smooth: 2,
    //   effects: true,
    //   normalizeScroll: true
    // });

    imagesRef.current.forEach((image: HTMLElement, index: number) => {
      timeline.to(image, {
        x: 2 * index,
        duration: 0.5
      });
    });
  }, [timeline]);

  useEffect(() => {
    timeline
      .fromTo(
        topBorderRef.current,
        {
          duration: 0.5,
          width: '0%'
        },
        {
          duration: 0.5,
          width: '100%'
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
          height: '100%'
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
          width: '100%'
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
          height: '100%'
        }
      );
  }, [timeline]);

  return (
    <section className="social">
      <div>
        {
          images.map((image, index) => (
            <div key={image + index} ref={((el) => imagesRef.current[index] = el!)()}>
              <ResponsiveImage src={image} alt={image + index} />
            </div>
          ))
        }
      </div>
      <div>
        <p>FOLLOW US ON INSTAGRAM</p>
        <div onMouseEnter={() => timeline.play()} onMouseLeave={() => timeline.reverse()}>
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
