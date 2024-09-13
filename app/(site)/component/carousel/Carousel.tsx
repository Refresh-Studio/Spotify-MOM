'use client';

import React, { useEffect, useState } from 'react';
import MultiCarousel from 'react-multi-carousel';

import { CarouselImage } from '../../../interface/gallery/carousel-image.interface';

import { getCarouselImages } from '../../../../sanity/sanity.query';
import { ResponsiveImage } from './ResponsiveImage';

import './carousel.scss';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 640,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    partialVisibilityGutter: 30
  }
};

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
      <MultiCarousel
        focusOnSelect={false}
        infinite
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        swipeable
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
      >
        {images.map((image: CarouselImage) => (
          <ResponsiveImage key={image._id} src={image.src} alt={image.name} />
        ))}
      </MultiCarousel>
    </section>
  );
};
