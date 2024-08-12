import Link from 'next/link';
import React, { ElementType } from 'react';

import './button.scss';

interface Props {
  link: string;
  target?: '_blank' | '_self';
  label: string;
  Icon?: ElementType;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  hollow?: boolean;
}

export const Button = ({
  link,
  target = '_self',
  label,
  Icon,
  small = false,
  medium = false,
  large = false,
  hollow = false
}: Props) => (
  <Link
    className={`button ${small ? 'button--small' : ''} ${large ? 'button--large' : ''}  ${medium ? 'button--medium' : ''} ${hollow ? 'button--hollow' : ''} typescale-4`}
    href={link}
    target={target}
  >
    {label}
    {Icon && <Icon />}
  </Link>
);
