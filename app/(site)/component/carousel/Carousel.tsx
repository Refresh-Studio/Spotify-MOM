'use client';

import React, { useEffect, useState } from 'react';

import { GalleryImage } from '../../../interface/gallery/gallery-image.interface';

import { getImages } from '../../../../sanity/sanity.query';
import { Ticker } from '../ticker/Ticker';
import { ResponsiveImage } from './ResponsiveImage';

import './carousel.scss';

export const Carousel = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const images = await getImages();
      setImages(images);
    };

    callApi();
  }, []);

  return (
    <section className="carousel dark-section">
      <Ticker hollow height={604} speed={50}>
        {images.map((image: GalleryImage) => (
          <ResponsiveImage key={image._id} src={image.src} alt={image.name} />
        ))}
      </Ticker>
    </section>
  );
};