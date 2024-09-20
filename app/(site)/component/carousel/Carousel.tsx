'use client';

import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import React, { MouseEvent, useEffect, useState } from 'react';

import { CarouselImage } from '../../../interface/gallery/carousel-image.interface';

import { getCarouselImages } from '../../../../sanity/sanity.query';
import { ResponsiveImage } from './ResponsiveImage';

import './carousel.scss';

gsap.registerPlugin(Draggable);

type DragPositionType = { x: number; y: number };

export const Carousel = () => {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [dragPosition, setDragPosition] = useState<DragPositionType>();

  const repeatedImages = Array.from(
    { length: images.length * 10 },
    (_, index) => images[index % images.length]
  );

  useEffect(() => {
    const callApi = async () => {
      const images = await getCarouselImages();
      setImages(images);
    };

    callApi();
  }, []);

  useEffect(() => {
    Draggable.create('.carousel > div', {
      type: 'x',
      inertia: true
    });
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    setDragPosition({ x: event.pageX, y: event.pageY });
  };

  return (
    <section className="carousel dark-section">
      <DragItem hover={isHovered} position={dragPosition} />
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {repeatedImages.map((image: CarouselImage) => (
          <div key={image._id} className="carousel__item">
            <ResponsiveImage key={image._id} src={image.src} alt={image.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

interface DragItemProps {
  hover: boolean;
  position?: DragPositionType;
}

const DragItem = ({ hover, position }: DragItemProps) => (
  <div
    className={`drag-item ${hover ? 'drag-item--hover' : ''}`}
    style={{
      top: position?.y ?? 0,
      left: position?.x ?? 0
    }}
  >
    <span className="typescale-2">DRAG</span>
  </div>
);
