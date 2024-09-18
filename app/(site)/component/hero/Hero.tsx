import React, { MouseEvent, useState } from 'react';

import { wideFont } from '../../../constant';
import { Filigree } from '../filigree/Filigree';
import { MousePosition } from '../filigree/FiligreeModel';

import './hero.scss';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    setMousePosition({
      x: event.clientX / window.innerWidth - 0.5, // Normalized mouse X
      y: event.clientY / window.innerHeight - 0.5 // Normalized mouse Y
    });
  };

  return (
    <section className="hero dark-section" onMouseMove={handleMouseMove}>
      <span className={`typescale-4 ${wideFont.className}`}>MOM: Mother of Music</span>
      <span className={`typescale-4 ${wideFont.className}`}>5 - 8 September, Cape Town</span>
      <Filigree mousePosition={mousePosition} />
      <span className={`typescale-4 ${wideFont.className}`}>5 - 8 September, Cape Town</span>
    </section>
  );
};
