'use client';

import gsap from 'gsap';
import Link from 'next/link';
import React, { ReactElement, useEffect, useMemo, useRef } from 'react';

import { noOp } from '../../../util';

import './button.scss';

interface Props {
  link?: string;
  target?: '_blank' | '_self';
  label: string;
  icon?: ReactElement;
  iconPosition?: 'left' | 'right';
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  hollow?: boolean;
  greyHollow?: boolean;
  clickable?: boolean;
  inverted?: boolean;
  light?: boolean;
  onClick?: () => void;
}

export const Button = ({
  link = '',
  target = '_self',
  label,
  icon,
  iconPosition = 'right',
  small = false,
  medium = false,
  large = false,
  hollow = false,
  clickable = false,
  inverted = false,
  greyHollow = false,
  light,
  onClick = noOp
}: Props) => {
  const buttonRef = useRef(null);
  const contentRef = useRef(null);
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);

  useEffect(() => {
    timeline
      .fromTo(
        contentRef.current,
        { duration: 0.1, z: 0, color: '#e0e1e3', borderColor: '#e0e1e3' },
        {
          duration: 0.1,
          z: 1,
          color: '#000',
          borderColor: '#000'
        }
      )
      .fromTo(
        buttonRef.current,
        { duration: 0.2, height: 0, width: '100%', x: 0, y: '50%' },
        { duration: 0.2, height: '100%', width: '100%', x: 0, y: 0 }
      );
  }, [timeline]);

  const handleClick = (event: { preventDefault: () => void }) => {
    if (clickable) {
      event.preventDefault();
      onClick!();
      return;
    }
  };

  const classNames = ['button', 'typescale-2'];
  if (inverted) {
    classNames.push('button--inverted');
  }

  if (small) {
    classNames.push('button--small');
  }

  if (medium) {
    classNames.push('button--medium');
  }

  if (large) {
    classNames.push('button--large');
  }

  if (hollow) {
    classNames.push('button--hollow');
  }

  if (greyHollow) {
    classNames.push('button--grey-hollow');
  }

  if (light) {
    classNames.push('button--light');
  }

  const isIconPositionLeft = iconPosition && iconPosition === 'left';
  const isIconPositionRight = iconPosition && iconPosition === 'right';

  const animate = (reverse?: boolean) => {
    if (reverse) {
      timeline.reverse();
      return;
    }

    timeline.play();
  };

  return (
    <Link
      className={classNames.join(' ')}
      href={link}
      onClick={handleClick}
      target={target}
      onMouseEnter={() => animate()}
      onMouseLeave={() => animate(true)}
    >
      <span className="button-bg" ref={buttonRef} />
      <div ref={contentRef}>
        {icon && isIconPositionLeft && icon}
        {label}
        {icon && isIconPositionRight && icon}
      </div>
    </Link>
  );
};
