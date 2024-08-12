import Image from 'next/image';
import React from 'react';

import { GalleryImage } from '../../../interface/gallery/gallery-image.interface';

import { getImages } from '../../../../sanity/sanity.query';
import { Ticker } from '../ticker/Ticker';

import './carousel.scss';

export const Carousel = async () => {
  const images = await getImages();

  return (
    <section className="carousel dark-section">
      <Ticker hollow height={597}>
        {images.map((image: GalleryImage) => (
          <Image
            key={image._id}
            height={597}
            width={403}
            objectFit="contain"
            src={image.src}
            alt={image.name}
          />
        ))}
      </Ticker>
    </section>
  );
};
