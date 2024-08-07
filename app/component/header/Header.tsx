import Link from 'next/link';
import React from 'react';

import { ReactComponent as SpotifyIcon } from '../../asset/spotify.svg';
import { ReactComponent as InputIcon } from '../../asset/input.svg';
import { ReactComponent as MomIcon } from '../../asset/mom.svg';

import './header.scss';
import { Button } from "../button/Button";

export const Header = () => (
    <header className="header">
        <MomIcon className="mom" />
        <Link href="https://spotify.com" target="_blank" rel="noreferrer" className="header__social">
            <SpotifyIcon/>
        </Link>
        <nav>
            <Link className="typescale-3" href="/">Home</Link>
            <Link className="typescale-3" href="/artists">Discover the Artists</Link>
            <Button small link="/tickets" label="Get Tickets" Icon={InputIcon} />
        </nav>
    </header>
);
