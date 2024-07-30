import React from "react";

import { ReactComponent as InputIcon } from '../../asset/input.svg';

import './footer.scss';

export const Footer = () => (
    <footer className="footer">
        <h1 className="typescale-10">Your Mom said <br /> Walala Wasala</h1>
        <p className="typescale-3">Means: Snooze you lose</p>
        <div className="footer__input">
            <input type="email" placeholder="Enter your email" />
            <span className="footer__icon">
                <InputIcon />
            </span>
        </div>
        <p className="typescale-3">Subscribe to stay up to date etc.</p>
        <div className="footer__copyright">
            <p className="typescale-3">Copyright &copy; Spotify</p>
        </div>
    </footer>
);