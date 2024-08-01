import React from 'react';

import { ReactComponent as InputIcon } from '../../asset/input.svg';

import { wideFont } from '../../layout';

import './footer.scss';

export const Footer = () => (
  <footer className="footer">
    <h1 className={`typescale-11 ${wideFont.className}`}>
      Mom said <br /> Walala Wasala
    </h1>
    <p className="typescale-4">You snooze you lose</p>
    <form className="footer__input">
      <input type="email" placeholder="Enter your email" />
      <span className="footer__icon">
        <InputIcon />
      </span>
    </form>
    <p className="typescale-4">Enter your email address to be the first to know.</p>
    <div className="footer__copyright">
      <p className="typescale-2">Copyright &copy; Spotify</p>
    </div>
  </footer>
);
