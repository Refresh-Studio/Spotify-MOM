import Image from 'next/image';
import React from 'react';

import './artist-tick.scss';

interface Props {
  name: string;
  image: string;
}

export const ArtistTick = ({ name, image }: Props) => (
  <article className="artist-tick">
    <p>
      <small>{name}</small>
    </p>
    <Image width={70} height={77} alt={name} src={image} />
  </article>
);
