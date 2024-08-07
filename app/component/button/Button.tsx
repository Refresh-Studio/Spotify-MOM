import React, { ElementType } from "react";

import './button.scss';
import Link from "next/link";

interface Props {
    link: string;
    target?: '_blank' | '_self';
    label: string;
    Icon: ElementType;
    small?: boolean;
}

export const Button = ({ link, target = '_self', label, Icon, small = false }: Props) => (
    <Link
        className={`button ${small ? 'button--small' : ''} typescale-4`}
        href={link}
        target={target}
    >
        {label}
        {Icon && <Icon/>}
    </Link>
)