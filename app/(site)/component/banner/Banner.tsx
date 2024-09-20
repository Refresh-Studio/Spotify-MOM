import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { wideFont } from '../../../constant';
import { ArtistDetailsModal } from '../artist-details-modal/ArtistDetailsModal';

import './banner.scss';
import { StaticImageData } from 'next/image';

gsap.registerPlugin(ScrollTrigger);

type Artist = {
  name: string;
  description: string;
  image: StaticImageData
}

const artists = [
  {
    name: '',
    description: '',
    image: 
  }
]

export const Banner = () => {
  const bannerRef = useRef<HTMLElement>(null);

  const timeline = useMemo(
    () =>
      gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top bottom',
          end: 'top top',
          toggleActions: 'restart pause resume pause',
          scrub: true
        }
      }),
    []
  );

  useEffect(() => {
    timeline.fromTo(
      bannerRef.current,
      {
        transform: 'scale(1.3, 1.3)'
      },
      {
        transform: 'scale(1, 1)'
      },
      0
    );
  }, [timeline]);

  const [open, setOpen] = useState<boolean>(false);

  // const isDesktop = useMemo(() => window.screen.width >= 1024, []);

  return (
    <section ref={bannerRef} className="banner" onClick={true ? () => setOpen(true) : () => {}}>
      {true && <ArtistDetailsModal open={open} onClose={() => setOpen(false)} />}
      <div>
        <h1 className={`typescale-8 ${wideFont.className}`}>
          DISCOVER. EMERGING. <br /> COMMUNITY.
        </h1>
      </div>
    </section>
  );
};
