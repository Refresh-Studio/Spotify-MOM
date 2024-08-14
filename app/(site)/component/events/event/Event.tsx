'use client';

import React, { ReactElement, useState } from 'react';

import { EventItem, TextBlock } from '../../../../interface/event/event-item.interface';

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
  expanded?: boolean;
  action?: ReactElement;
  onCancel?: () => void;
}

export const Event = ({
  event,
  filled = false,
  action,
  expandable = false,
  expanded = false,
  registering = false,
  onCancel
}: Props) => {
  const [expandedDetails, setExpanded] = useState<boolean>(expanded);

  const toggleExpanded = () => {
    setExpanded(!expandedDetails);
  };

  return (
    <div
      className={`event ${filled ? 'event--filled' : ''} ${expandedDetails ? 'event--expanded' : ''}`}
      id={event.slug}
    >
      <header>
        <div>
          <p className="typescale-4">
            {event.startDate}&nbsp;
            {filled && event.endDate && `- ${event.endDate}`}
          </p>
          <h2 className={`typescale-6 ${wideFont.className}`}>{event.name}</h2>
          <h3 className={`typescale-6 ${wideFont.className}`}>{event.address}</h3>
          <p className="typescale-4">
            {(event.lineup ?? []).filter(Boolean).length === 0
              ? ''
              : `Ft. ${(event.lineup ?? []).join(' // ')}`}
          </p>
        </div>
        {!registering &&
          expandable &&
          (expandedDetails ? (
            <ExpandedIcon className="event__icon" onClick={toggleExpanded} />
          ) : (
            <CollapsedIcon className="event__icon" onClick={toggleExpanded} />
          ))}
      </header>
      {expandedDetails && !registering && (
        <main>
          {(event.description ?? [])
            .flatMap((block: TextBlock) =>
              block.children.map((child) => ({
                text: child.text,
                style: block.style,
                marks: child.marks,
                _key: child._key
              }))
            )
            .map((block) => {
              switch (block.style) {
                case 'h1':
                  return (
                    <h1 key={block._key} className="event__description-block">
                      {block.text}
                    </h1>
                  );
                case 'h2':
                  return (
                    <h2 key={block._key} className="event__description-block">
                      {block.text}
                    </h2>
                  );
                case 'h3':
                  return (
                    <h3 key={block._key} className="event__description-block">
                      {block.text}
                    </h3>
                  );
                case 'h4':
                  return (
                    <h4 key={block._key} className="event__description-block">
                      {block.text}
                    </h4>
                  );
                case 'h5':
                  return (
                    <h5 key={block._key} className="event__description-block">
                      {block.text}
                    </h5>
                  );
                case 'h6':
                  return (
                    <h6 key={block._key} className="event__description-block">
                      {block.text}
                    </h6>
                  );
                default:
                  if (block.marks.includes('strong')) {
                    return (
                      <strong key={block._key} className="event__description-block typescale-4">
                        {block.text}
                      </strong>
                    );
                  }

                  if (block.marks.includes('em')) {
                    return (
                      <em key={block._key} className="event__description-block typescale-4">
                        {block.text}
                      </em>
                    );
                  }

                  return (
                    <p key={block._key} className="event__description-block typescale-4">
                      {block.text}
                    </p>
                  );
              }
            })}
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
              />
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
          <small className="typescale-4">
            {[event.startTime, event.endTime].filter(Boolean).join(' - ')}
          </small>
          {action}
        </footer>
      )}
    </div>
  );
};
