'use client';

import React, { ReactElement, useState } from 'react';

import { EventItem } from '../../../../interface/event/event-item.interface';

import { ReactComponent as CollapsedIcon } from '../../../../asset/collapsed.svg';
import { ReactComponent as ExpandedIcon } from '../../../../asset/expanded.svg';

import { wideFont } from '../../../../constant';
import { Button } from '../../button/Button';

import './event.scss';

interface Props {
  event: EventItem;
  filled?: boolean;
  expandable?: boolean;
  registering?: boolean;
  action?: ReactElement;
  onCancel?: () => void;
}

export const Event = ({
  event,
  filled = false,
  action,
  expandable = false,
  registering = false,
  onCancel
}: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`event ${filled ? 'event--filled' : ''} ${expanded ? 'event--expanded' : ''}`}
      id={event.slug}
    >
      <header>
        <div>
          <h2 className={`typescale-6 ${wideFont.className}`}>{event.name}</h2>
          <h3 className={`typescale-6 ${wideFont.className}`}>{event.address}</h3>
          <p className="typescale-4">{event.free ? 'Free Ticket' : 'Ticketed Event'}</p>
        </div>
        {expandable &&
          (expanded ? (
            <ExpandedIcon className="event__icon" onClick={toggleExpanded} />
          ) : (
            <CollapsedIcon className="event__icon" onClick={toggleExpanded} />
          ))}
      </header>
      {expanded && !registering && (
        <main>
          <p className="typescale-4">{event.description}</p>
        </main>
      )}
      {registering && (
        <main>
          {!event.free && (
            <div>
              <iframe
                src={`https://www.quicket.co.za/event/${event.quicketEventId}/widget#/registration`}
                width="100%"
                height="464px"
              ></iframe>
              <Button
                clickable
                onClick={() => {
                  setExpanded(false);
                  onCancel!();
                }}
                hollow
                small
                label="Cancel"
              />
            </div>
          )}
        </main>
      )}
      {!registering && (
        <footer>
          <div>
            <small className="typescale-4">
              {event.startTime} - {event.endTime}
            </small>
            <small className="typescale-4">
              {new Date(event.startDate).toDateString()}{' '}
              {filled && `- ${new Date(event.endDate).toDateString()}`}
            </small>
          </div>
          {action}
        </footer>
      )}
    </div>
  );
};
