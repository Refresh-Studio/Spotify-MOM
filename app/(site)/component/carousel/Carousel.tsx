'use client';

import React, { useEffect, useState } from 'react';

import { CarouselImage } from '../../../interface/gallery/carousel-image.interface';

import { getCarouselImages } from '../../../../sanity/sanity.query';
import { Ticker } from '../ticker/Ticker';
import { ResponsiveImage } from './ResponsiveImage';

import './carousel.scss';

export const Carousel = () => {
  const [images, setImages] = useState<CarouselImage[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const images = await getCarouselImages();
      setImages(images);
    };

    callApi();
  }, []);

  return (
    <section className="carousel dark-section">
      <Ticker hollow height={604} speed={50}>
        {images.map((image: CarouselImage) => (
          <ResponsiveImage key={image._id} src={image.src} alt={image.name} />
        ))}
      </Ticker>
    </section>
  );
};
