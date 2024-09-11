'use client';

import gsap from 'gsap';
import React, { ReactElement, useEffect, useMemo, useRef, useState } from 'react';

import { EventItem, TextBlock } from '../../../../interface/event/event-item.interface';

import { ReactComponent as CollapsedIcon } from '../../../../asset/collapsed.svg';
import { ReactComponent as ExpandedIcon } from '../../../../asset/expanded.svg';

import { wideFont } from '../../../../constant';

import './event.scss';

interface Props {
  event: EventItem;
  filled?: boolean;
  expandable?: boolean;
  expanded?: boolean;
  action?: ReactElement;
  onCancel?: () => void;
}

export const Event = ({
  event,
  filled = false,
  action,
  expandable = false,
  expanded = false
}: Props) => {
  const [expandedDetails, setExpanded] = useState<boolean>(expanded);

  const toggleExpanded = () => {
    setExpanded(!expandedDetails);
  };

  const underlineRef = useRef(null);
  const timeline = useMemo(() => {
    return gsap.timeline({ paused: true });
  }, []);

  useEffect(() => {
    timeline
      .fromTo(
        underlineRef.current,
        { width: '0%', opacity: 0 },
        { width: '100%', duration: 0.4, opacity: 1 }
      )
      .to(underlineRef.current, {
        duration: 0.4,
        ease: 'power2.inOut'
      });
  }, [timeline, underlineRef]);

  const animate = (reverse?: boolean) => {
    if (reverse) {
      timeline.reverse(100, true);
      return;
    }

    timeline.play(0, true);
  };

  return (
    <div
      onMouseEnter={() => animate()}
      onMouseLeave={() => animate(true)}
      className={`event ${filled ? 'event--filled' : ''} ${expandedDetails ? 'event--expanded' : ''}`}
      id={event.slug}
    >
      <header>
        <div>
          <p className="typescale-3">
            {event.startDate}&nbsp;
            {filled && event.endDate && `- ${event.endDate}`}
          </p>
          <h2 className={`typescale-5 ${wideFont.className}`}>{event.name}</h2>
          <h3 className={`typescale-5 ${wideFont.className}`}>{event.address}</h3>
          <p className="typescale-2">
            {(event.lineup ?? []).filter(Boolean).length === 0
              ? ''
              : `Ft. ${(event.lineup ?? []).join(' // ')}`}
          </p>
        </div>
        {expandable &&
          (expandedDetails ? (
            <ExpandedIcon className="event__icon" onClick={toggleExpanded} />
          ) : (
            <CollapsedIcon className="event__icon" onClick={toggleExpanded} />
          ))}
      </header>
      {expandedDetails && (
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
                      <strong key={block._key} className="event__description-block typescale-3">
                        {block.text}
                      </strong>
                    );
                  }

                  if (block.marks.includes('em')) {
                    return (
                      <em key={block._key} className="event__description-block typescale-3">
                        {block.text}
                      </em>
                    );
                  }

                  return (
                    <p key={block._key} className="event__description-block typescale-3">
                      {block.text}
                    </p>
                  );
              }
            })}
        </main>
      )}
      <footer>
        <small className="typescale-2">
          {[event.startTime, event.endTime].filter(Boolean).join(' - ')}
        </small>
        {action}
      </footer>
      <span className="underline" ref={underlineRef} />
    </div>
  );
};
