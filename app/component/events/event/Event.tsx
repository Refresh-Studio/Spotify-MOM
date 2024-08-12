'use client';

import React, { ReactElement, useState } from 'react';

import { ReactComponent as CollapsedIcon } from '../../../asset/collapsed.svg';
import { ReactComponent as ExpandedIcon } from '../../../asset/expanded.svg';

import { wideFont } from '../../../constant';
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

  return (
    <div className={`event ${filled ? 'event--filled' : ''} ${expanded ? 'event--expanded' : ''}`}>
      <header>
        <div>
          <h2 className={`typescale-6 ${wideFont.className}`}>{event.name}</h2>
          <h3 className={`typescale-6 ${wideFont.className}`}>{event.address}</h3>
          <small className="typescale-4">
            {event.price === 0 ? 'Free Ticket' : `R${event.price.toFixed(2)}`}
          </small>
        </div>
        {expandable &&
          (expanded ? (
            <ExpandedIcon onClick={() => setExpanded(!expanded)} />
          ) : (
            <CollapsedIcon onClick={() => setExpanded(!expanded)} />
          ))}
      </header>
      {expanded && (
        <main>
          <p className="typescale-4">{event.description}</p>
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
