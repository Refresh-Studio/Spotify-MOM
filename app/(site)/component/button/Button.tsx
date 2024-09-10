'use client';

import Link from 'next/link';
import React, { ReactElement } from 'react';

import './button.scss';

interface Props {
  link?: string;
  target?: '_blank' | '_self';
  label: string;
  icon?: ReactElement;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  hollow?: boolean;
  greyHollow?: boolean;
  clickable?: boolean;
  inverted?: boolean;
  onClick?: () => void;
}

export const Button = ({
  link = '',
  target = '_self',
  label,
  icon,
  small = false,
  medium = false,
  large = false,
  hollow = false,
  clickable = false,
  inverted = false,
  greyHollow = false,
  onClick
}: Props) => {
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

  return (
    <Link className={classNames.join(' ')} href={link} onClick={handleClick} target={target}>
      {label}
      {icon && icon}
    </Link>
  );
};
