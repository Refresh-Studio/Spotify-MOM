'use client';

import Link from 'next/link';
import React, { ReactElement } from 'react';

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
  light,
  onClick = noOp
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

  if (light) {
    classNames.push('button--light');
  }

  const isIconPositionLeft = iconPosition && iconPosition === 'left';
  const isIconPositionRight = iconPosition && iconPosition === 'right';

  return (
    <Link className={classNames.join(' ')} href={link} onClick={handleClick} target={target}>
      {icon && isIconPositionLeft && icon}
      {label}
      {icon && isIconPositionRight && icon}
    </Link>
  );
};
