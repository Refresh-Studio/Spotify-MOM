import Image from 'next/image';
import { useEffect, useRef } from 'react';

import './responsive-image.scss';

interface Props {
  src: string;
  alt: string;
}

export const ResponsiveImage = ({ src, alt }: Props) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgElement = imgRef.current;

    if (imgElement) {
      const handleLoad = () => {
        if (imgElement.naturalWidth > imgElement.naturalHeight) {
          imgElement.classList.add('landscape');
          imgElement.classList.remove('portrait');
        } else {
          imgElement.classList.add('portrait');
          imgElement.classList.remove('landscape');
        }
      };

      if (imgElement.complete) {
        handleLoad();
      } else {
        imgElement.onload = handleLoad;
      }
    }
  }, []);

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      className="responsive-image"
      objectFit="contain"
      width={403}
      height={604}
    />
  );
};
