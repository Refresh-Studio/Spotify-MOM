'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

import { Artist } from '../../../../interface/artist/artist.interface';

import { Button } from '../../../component/button/Button';

import { ReactComponent as RightIcon } from '../../../../asset/right.svg';
import { ReactComponent as ViewIcon } from '../../../../asset/view.svg';

import { wideFont } from '../../../../constant';

import './artists.scss';

interface Props {
  artists?: Artist[];
}

export const Artists = ({ artists = [] }: Props) => {
  const searchParams = useSearchParams();
  const [activeArtist, setActiveArtist] = useState(artists[0]);

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
    setActiveArtist(filteredArtists[0]);
  }, [filteredArtists]);

  return (
    <section className="artists dark-section">
      <nav className="artists__list">
        {(filteredArtists ?? []).map((artist: Artist) => (
          <li
            key={artist.slug}
            className={`artists__artist ${artist.slug === activeArtist.slug ? 'artists__artist--active' : ''}`}
            onClick={() => setActiveArtist(artist)}
          >
            <div>
              <Image width={50} height={50} alt={artist.name} src={artist.image} />
              <p>{artist.name}</p>
            </div>
            <RightIcon />
          </li>
        ))}
      </nav>
      {activeArtist && (
        <div className="artists__details">
          <h1 className={`typescale-8 ${wideFont.className}`}>{activeArtist.name}</h1>
          <p className="typescale-4">{activeArtist.followers.toLocaleString()} followers</p>
          <div className="artists__tags">
            {activeArtist.musicTags.map((tag: string) => (
              <Tag key={tag} title={tag} />
            ))}
          </div>
          <Button
            target="_blank"
            hollow
            small
            link={activeArtist.url}
            label="View Profile"
            icon={<ViewIcon />}
          />
          <div className="artists__details-image">
            <Image objectFit="contain" fill src={activeArtist.image} alt={activeArtist.name} />
          </div>
        </div>
      )}
    </section>
  );
};

interface TagProps {
  title: string;
}

const Tag = ({ title }: TagProps) => <div className="tag typescale-3">{title}</div>;
