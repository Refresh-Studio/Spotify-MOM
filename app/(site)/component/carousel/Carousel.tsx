'use client';

import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import React, { MouseEvent, useEffect, useState } from 'react';

import { DragPositionType } from '../../../interface/drag-position.interface';
import { CarouselImage } from '../../../interface/gallery/carousel-image.interface';

import { getCarouselImages } from '../../../../sanity/sanity.query';
import { InertiaPlugin } from '../../../plugins/InertiaPlugin';
import { DragItem } from '../drag-item/DragItem';
import { ResponsiveImage } from './ResponsiveImage';

import './carousel.scss';

gsap.registerPlugin(Draggable, InertiaPlugin);

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
      inertia: true,
      cursor: 'pointer',
      activeCursor: 'grabbing'
    });
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    setDragPosition({ x: event.pageX, y: event.pageY });
  };

  return (
    <section className="carousel dark-section">
      <DragItem visible={isHovered} position={dragPosition} />
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {repeatedImages.map((image: CarouselImage, index: number) => (
          <div key={`${image._id}_${index}`} className="carousel__item">
            <ResponsiveImage key={image._id} src={image.src} alt={image.name} />
          </div>
        ))}
      </div>
    </section>
  );
};
