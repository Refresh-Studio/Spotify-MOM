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
  clickable?: boolean;
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
  onClick
}: Props) => {
  const handleClick = (event: { preventDefault: () => void }) => {
    if (clickable) {
      event.preventDefault();
      onClick!();
      return;
    }
  };

  return (
    <Link
      className={`button ${small ? 'button--small' : ''} ${large ? 'button--large' : ''}  ${medium ? 'button--medium' : ''} ${hollow ? 'button--hollow' : ''} typescale-4`}
      href={link}
      onClick={handleClick}
      target={target}
    >
      {label}
      {icon && icon}
    </Link>
  );
};
