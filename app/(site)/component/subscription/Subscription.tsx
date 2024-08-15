import formData from 'form-data';
import Mailgun from 'mailgun.js';
import React, { FormEvent, useState } from 'react';

import { ReactComponent as InputIcon } from '../../asset/input.svg';

import { wideFont } from '../../../constant';
import { Loader } from '../loader/Loader';

import './subscription.scss';

const isValidEmail = (value: string): boolean => {
  if (!value || typeof value !== 'string') {
    return false;
  }

  // https://www.rfc-editor.org/rfc/rfc5321.txt
  // 4.5.3.1.1. & 4.5.3.1.2.
  if (value.length > 254) {
    return false;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

export const Subscription = () => {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSendEmail = async (event: FormEvent<HTMLFormElement | HTMLSpanElement>) => {
    setLoading(true);
    event.preventDefault();

    if (!isValidEmail(email)) {
      setLoading(false);
      setError(true);
      return;
    }

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
        setTimeout(() => setSubscribed(false), 5000);
      })
      .catch(() => {
        setSubscribed(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="subscription">
      <h1 className={`typescale-11 ${wideFont.className}`}>
        Mom said <br /> Walala Wasala
      </h1>
      <p className="typescale-4">You snooze you lose</p>
      {subscribed && (
        <div className="subscription__subscribed">
          <span className="typescale-4">We&apos;ll notify you when MOM is Here.</span>
        </div>
      )}
      {!subscribed && (
        <>
          <form
            className={`subscription__input ${error ? 'subscription__input--error' : ''}`}
            onSubmit={handleSendEmail}
          >
            <div>
              <label
                className={`typescale-2 ${email?.length > 0 ? 'subscription__input-label' : ''}`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                }}
              />
            </div>
            <span className="subscription__icon" onClick={handleSendEmail}>
              {!loading && <InputIcon />}
              {loading && <Loader />}
            </span>
          </form>
          {error && (
            <small className="typescale-3 subscription__input-error">
              Please enter a valid email address
            </small>
          )}
          <p className="typescale-4 subscription__blurb">
            Enter your email address to be the first to know.
          </p>
        </>
      )}
    </section>
  );
};
