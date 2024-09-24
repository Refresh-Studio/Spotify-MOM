import Image from 'next/image';
import React from 'react';

import './artist-tick.scss';

interface Props {
  name: string;
  image: string;
  width: number;
  height: number;
  priortiy?: boolean;
}

export const ArtistTick = ({ name, image, width = 88, height = 90 }: Props) => (
  <article className="artist-tick">
    <p>
      <small className="typescale-3">{name}</small>
    </p>
    <Image width={width} height={height} alt={name} src={image} />
  </article>
);
