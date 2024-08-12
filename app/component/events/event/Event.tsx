'use client';

import React, { ReactElement, useState } from 'react';

import { scrollIntoView } from '../../../util';

import { ReactComponent as CollapsedIcon } from '../../../asset/collapsed.svg';
import { ReactComponent as ExpandedIcon } from '../../../asset/expanded.svg';

import { wideFont } from '../../../constant';
import { Button } from '../../button/Button';
import { EventItem } from '../Events';

import './event.scss';

interface Props {
  event: EventItem;
  filled?: boolean;
  expandable?: boolean;
  action?: ReactElement;
}

export const Event = ({ event, filled = false, action, expandable = false }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = (scroll = false) => {
    setExpanded(!expanded);
    if (scroll) {
      scrollIntoView('tickets-tabs');
    }
  };

  return (
    <div
      className={`event ${filled ? 'event--filled' : ''} ${expanded ? 'event--expanded' : ''}`}
      id={`event_${event.id}`}
    >
      <header>
        <div>
          <h2 className={`typescale-6 ${wideFont.className}`}>{event.name}</h2>
          <h3 className={`typescale-6 ${wideFont.className}`}>{event.address}</h3>
          <small className="typescale-4">{event.free ? 'Free Ticket' : 'Ticketed Event'}</small>
        </div>
        {expandable &&
          (expanded ? (
            <ExpandedIcon onClick={() => toggleExpanded(false)} />
          ) : (
            <CollapsedIcon onClick={() => toggleExpanded(false)} />
          ))}
      </header>
      {expanded && (
        <main>
          <p className="typescale-4">{event.description}</p>
          {!event.free && (
            <div>
              <iframe
                src="https://www.quicket.co.za/event/272960/widget#/registration"
                frameBorder="0"
                scrolling="yes"
                width="100%"
                height="464px"
              ></iframe>
              <Button
                clickable
                onClick={() => toggleExpanded(true)}
                hollow
                small
                link="/"
                label="Cancel"
              />
            </div>
          )}
        </main>
      )}
      <footer>
        <div>
          <small className="typescale-4">
            {event.startTime} - {event.endTime}
          </small>
          <small className="typescale-4">{event.date.toDateString()}</small>
        </div>
        {action}
      </footer>
    </div>
  );
};
