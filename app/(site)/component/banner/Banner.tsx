import gsap from 'gsap';
import React, { MouseEvent, useEffect, useMemo, useRef, useState } from 'react';

import { DragPositionType } from '../../../interface/drag-position.interface';

import { wideFont } from '../../../constant';
import { ArtistDetailsModal } from '../artist-details-modal/ArtistDetailsModal';
import { DragItem } from '../drag-item/DragItem';

import './banner.scss';

export const Banner = () => {
  const bannerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [selectedArtist, setSelectedArtist] = useState<string>('');
  const [dragPosition, setDragPosition] = useState<DragPositionType>();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const timeline = useMemo(
    () =>
      gsap.timeline({
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top bottom',
          end: 'top top',
          toggleActions: 'restart pause resume pause',
          scrub: true
        }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [bannerRef.current]
  );

  const fadeTimeline = useMemo(
    () =>
      gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          scrub: true,
          trigger: headingRef.current,
          end: 'top center',
          toggleActions: 'play none none reverse'
        }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [headingRef.current]
  );

  useEffect(() => {
    timeline.fromTo(
      bannerRef.current,
      {
        transform: 'scale(1.3, 1.3)'
      },
      {
        transform: 'scale(1, 1)'
      }
    );
  }, [timeline]);

  useEffect(() => {
    fadeTimeline.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6
      }
    );
  }, [fadeTimeline]);

  const [open, setOpen] = useState<boolean>(false);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    setDragPosition({ x: event.pageX, y: event.pageY });
  };

  const handleMouseEnter = (artist: string) => {
    setIsHovered(true);
    setSelectedArtist(artist);
  };

  return (
    <section ref={bannerRef} className="banner">
      <DragItem position={dragPosition} label={selectedArtist} visible={isHovered} />
      <ArtistDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        selectedArtist={selectedArtist}
      />
      <div>
        <div className="banner__overlay">
          <div
            onClick={() => setOpen(true)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseEnter('Dee Koala')}
            onMouseLeave={() => setIsHovered(false)}
          />
          <div
            onClick={() => setOpen(true)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseEnter('Queezy')}
            onMouseLeave={() => setIsHovered(false)}
          />
          <div
            onClick={() => setOpen(true)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseEnter('Lady Skollie')}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <h1 ref={headingRef} className={`typescale-8 ${wideFont.className}`}>
          DISCOVER. EMERGING. <br /> COMMUNITY.
        </h1>
      </div>
    </section>
  );
};
