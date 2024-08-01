'use client';

import formData from 'form-data';
import Mailgun from 'mailgun.js';
import React, { FormEvent, FormEventHandler, useState } from 'react';

import { ReactComponent as InputIcon } from '../../asset/input.svg';

import { wideFont } from '../../layout';
import { Loader } from '../loader/Loader';

import './footer.scss';

export const Footer = () => {
  const [email, setEmail] = useState<string>();
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendEmail = async (event: FormEvent<HTMLFormElement | HTMLSpanElement>) => {
    setLoading(true);
    event.preventDefault();

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.NEXT_PUBLIC_MAILGUN_API_KEY as string
    });

    mg.lists.members
      .createMember(process.env.NEXT_PUBLIC_MAILGUN_MAIL_LIST_ADDRESS as string, {
        address: email!,
        subscribed: 'yes',
        upsert: 'yes'
      })
      .then(() => {
        setSubscribed(true);
      })
      .catch(() => {
        setSubscribed(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <footer className="footer">
      <h1 className={`typescale-11 ${wideFont.className}`}>
        Mom said <br /> Walala Wasala
      </h1>
      <p className="typescale-4">You snooze you lose</p>
      {subscribed && (
        <div className="footer__subscribed">
          <span className="typescale-4">We&apos;ll notify you when MOM is Here.</span>
        </div>
      )}
      {!subscribed && (
        <>
          <form className="footer__input" onSubmit={handleSendEmail}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="footer__icon" onClick={handleSendEmail}>
              {!loading && <InputIcon />}
              {loading && <Loader />}
            </span>
          </form>
          <p className="typescale-4">Enter your email address to be the first to know.</p>
        </>
      )}
      <div className="footer__copyright">
        <p className="typescale-2">Copyright &copy; Spotify</p>
      </div>
    </footer>
  );
};
