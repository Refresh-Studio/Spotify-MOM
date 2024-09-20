import { gsap } from 'gsap-trial';
import React, { useEffect } from 'react';

import './page-transition.scss';

export const PageTransition = () => {
  useEffect(() => {
    gsap.set('.page-transition__block', { x: '0%' });
    gsap.to('.page-transition__block', {
      duration: 1,
      x: '100%',
      ease: 'power2.out',
      stagger: 0.3,
      onComplete: () => {
        gsap.to('.page-transition', { display: 'none' });
      }
    });
  }, []);

  const transitionBlocks = Array.from({ length: 8 });

  return (
    <div className="page-transition">
      {transitionBlocks.map((_, index) => (
        <div className="page-transition__block" key={index} />
      ))}
    </div>
  );
};
