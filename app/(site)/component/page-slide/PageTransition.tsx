import { gsap } from 'gsap';
import React, { useEffect } from 'react';

import './page-transition.scss';

export const PageTransition = () => {
  useEffect(() => {
    gsap.set('.page-transition_block', { x: '0%' });
    gsap.to('.page-transition_block', {
      duration: 0.8,
      x: '100%',
      ease: 'power2.out',
      stagger: 0.3,
      onComplete: () => {
        gsap.to('.page-transition', { display: 'none' });
      }
    });
  }, []);

  const transitionBlocks = Array.from({ length: 5 });

  return (
    <div className="page-transition">
      {transitionBlocks.map((_, index) => (
        <div className="page-transition_block" key={index} />
      ))}
    </div>
  );
};
