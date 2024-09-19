import gsap from 'gsap';
import { useEffect, useMemo, useRef } from 'react';

import { ResponsiveImage } from '../carousel/ResponsiveImage';

import './social.scss';

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

  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);

  useEffect(() => {
    timeline
      .fromTo(
        topBorderRef.current,
        {
          duration: 0.5,
          width: '0%',
          backgroundColor: '#f036a4'
        },
        {
          duration: 0.5,
          width: '100%',
          backgroundColor: '#f036a4'
        }
      )
      .fromTo(
        rightBorderRef.current,
        {
          duration: 0.5,
          height: '0%',
          backgroundColor: '#f036a4'
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
          width: '0%',
          backgroundColor: '#f0c4d9'
        },
        {
          duration: 0.5,
          width: '100%',
          backgroundColor: '#f0c4d9'
        }
      )
      .fromTo(
        leftBorderRef.current,
        {
          duration: 0.5,
          height: '0%',
          backgroundColor: '#f0c4d9'
        },
        {
          duration: 0.5,
          height: '100%',
          backgroundColor: '#f036a4'
        }
      );
  }, [timeline]);

  return (
    <section className="social">
      <div>
        {images.map((image, index) => (
          <ResponsiveImage src={image} key={image + index} alt={image + index} />
        ))}
      </div>
      <div>
        <p className="typescale-3">FOLLOW US ON INSTAGRAM</p>
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
