'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { Fragment, useEffect, useMemo, useState } from 'react';

import { Artist } from '../../../../interface/artist/artist.interface';

import { Button } from '../../../component/button/Button';

import { ReactComponent as CloseIcon } from '../../../../asset/close.svg';
import { ReactComponent as RightIcon } from '../../../../asset/right.svg';
import { ReactComponent as ViewIcon } from '../../../../asset/view.svg';

import { wideFont } from '../../../../constant';

import './artists.scss';

interface Props {
  artists?: Artist[];
}

export const Artists = ({ artists = [] }: Props) => {
  const searchParams = useSearchParams();
  const [activeArtist, setActiveArtist] = useState<Artist | undefined>();

  const query = useMemo(() => {
    return searchParams.get('query');
  }, [searchParams]);

  const filteredArtists = useMemo(() => {
    if (!query || query === 'all') {
      return artists;
    }

    return artists.filter((artist: Artist) => artist.filterTags.includes(query!));
  }, [query, artists]);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setActiveArtist(filteredArtists[0]);
    }
  }, [filteredArtists]);

  return (
    <section className="artists dark-section">
      <nav className="artists__list">
        {(filteredArtists ?? []).map((artist: Artist) => (
          <Fragment key={artist._id}>
            <li
              key={artist.slug}
              className={`artists__artist ${artist.slug === activeArtist?.slug ? 'artists__artist--active' : ''}`}
              onClick={() => setActiveArtist(artist)}
            >
              <div>
                <Image width={50} height={50} alt={artist.name} src={artist.image} />
                <p className="typescale-5">{artist.name}</p>
              </div>
              <div className="artists__icon--mobile">
                {activeArtist?.slug === artist.slug && (
                  <CloseIcon
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveArtist(undefined);
                    }}
                  />
                )}
                {activeArtist?.slug !== artist.slug && <RightIcon />}
              </div>
              <div className="artists__icon">
                <RightIcon />
              </div>
            </li>
            {activeArtist?.slug === artist.slug && (
              <div className="artists__mobile-details">
                <h1 className={`typescale-7 ${wideFont.className}`}>{activeArtist?.name}</h1>
                <p className="typescale-3">{activeArtist?.followers.toLocaleString()} followers</p>
                <div className="artists__tags">
                  {(activeArtist?.genres ?? activeArtist?.musicTags ?? []).map((tag: string) => (
                    <Tag key={tag} title={tag} />
                  ))}
                </div>
                <Button
                  target="_blank"
                  hollow
                  small
                  link={activeArtist?.url}
                  label="View Profile"
                  icon={<ViewIcon />}
                />
                <div className="artists__details-image">
                  <Image
                    objectFit="contain"
                    fill
                    src={activeArtist?.image}
                    alt={activeArtist?.name}
                  />
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </nav>
      {activeArtist && (
        <div className="artists__details">
          <h1 className={`typescale-7 ${wideFont.className}`}>{activeArtist?.name}</h1>
          <p className="typescale-3">{activeArtist?.followers.toLocaleString()} followers</p>
          <div className="artists__tags">
            {(activeArtist?.genres ?? activeArtist?.musicTags ?? []).map((tag: string) => (
              <Tag key={tag} title={tag} />
            ))}
          </div>
          <Button
            target="_blank"
            hollow
            small
            link={activeArtist?.url}
            label="View Profile"
            icon={<ViewIcon />}
          />
          <div className="artists__details-image">
            <Image objectFit="cover" fill src={activeArtist?.image} alt={activeArtist?.name} />
          </div>
        </div>
      )}
    </section>
  );
};

interface TagProps {
  title: string;
}

const Tag = ({ title }: TagProps) => <div className="tag typescale-2">{title}</div>;
