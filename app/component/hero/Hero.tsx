'use client';

import React from 'react';

import { ReactComponent as DownIcon } from '../../asset/down.svg';
import { ReactComponent as BannerIcon } from '../../asset/banner.svg';

import './hero.scss';

export const Hero = () => (
    <section className="hero">
        <div>
            <span>MOM: Mother of Music</span>
            <span>5,8 Sep, Cape Town</span>
        </div>
        <div>
            <span>Listen to your mother</span>
            <span>Scroll down <DownIcon /></span>
        </div>
        <div className="hero__content">
            <p className="typescale-9">
                Mother of Music is a 4-day Discovery of Emerging Sounds and Art from Africa in the Mother City.
            </p>
            <p className="typescale-9">
                Join MOM as she spotlights the african renaissance.
            </p>
        </div>
        <footer>
            <span className="typescale-6">Cape Town</span>
            <BannerIcon />
            <span className="typescale-6">5,8 Sep, Cape Town</span>
        </footer>
    </section>
);
