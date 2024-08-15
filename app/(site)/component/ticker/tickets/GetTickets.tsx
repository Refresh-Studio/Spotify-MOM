import React from 'react';

import { ReactComponent as TicketIcon } from '../../../../asset/ticket.svg';

import './get-tickets.scss';

export const GetTickets = () => (
  <article className="get-tickets">
    <TicketIcon />
    <small>Get Tickets</small>
  </article>
);
