import gsap from 'gsap';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { wideFont } from '../../../constant';
import { ArtistDetailsModal } from '../artist-details-modal/ArtistDetailsModal';

import './banner.scss';

export const Banner = () => {
  const bannerRef = useRef<HTMLElement>(null);
  const [selectedArtist, setSelectedArtist] = useState<string>('');

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

  const handleSelectArtist = (artist: string) => {
    setOpen(true);
    setSelectedArtist(artist);
  };

  return (
    <section ref={bannerRef} className="banner">
      <ArtistDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        selectedArtist={selectedArtist}
      />
      <div>
        <div className="banner__overlay">
          <div onClick={() => handleSelectArtist('Dee Koala')} />
          <div onClick={() => handleSelectArtist('Queezy')} />
          <div onClick={() => handleSelectArtist('Lady Skollie')} />
        </div>
        <h1 className={`typescale-8 ${wideFont.className}`}>
          DISCOVER. EMERGING. <br /> COMMUNITY.
        </h1>
      </div>
    </section>
  );
};
