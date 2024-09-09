import React from 'react';
import { wideFont } from '../../../../constant';

import './hero.scss';

interface Props {
    artistAmount: number;
}

export const Hero = ({ artistAmount }: Props) => (
    <section className="artists-hero light-section">
        <h1 className={`typescale-10 ${wideFont.className}`}>Artists</h1>
        <div className="counter">
            <span className="typescale-5">{artistAmount}</span>
        </div>
    </section>
);
