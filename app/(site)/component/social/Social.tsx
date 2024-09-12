import gsap from 'gsap';
import { useEffect, useMemo, useRef } from 'react';

import './social.scss';

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
