'use client';

import gsap from 'gsap-trial';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { Artist } from '../../../../interface/artist/artist.interface';
import { Filter } from '../../../../interface/filter/filter.interface';

import { Button } from '../../../component/button/Button';
import { TabItem, Tabs } from '../../../component/tabs/Tabs';

import { ReactComponent as CloseIcon } from '../../../../asset/close.svg';
import { ReactComponent as RightIcon } from '../../../../asset/right.svg';
import { ReactComponent as ViewIcon } from '../../../../asset/view.svg';

import { getArtistFilters } from '../../../../../sanity/sanity.query';
import { wideFont } from '../../../../constant';

import './artists.scss';

interface Props {
  artists?: Artist[];
}

export const Artists = ({ artists = [] }: Props) => {
  const searchParams = useSearchParams();
  const [activeArtist, setActiveArtist] = useState<Artist | undefined>();
  const [filters, setFilters] = useState<TabItem[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const artistFilters = await getArtistFilters();
      setFilters([
        { path: 'all', name: 'All' },
        ...artistFilters.map((filter: Filter) => ({ path: filter.slug, name: filter.title }))
      ]);
    };

    callApi();
  }, []);

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
      <Tabs tabs={filters} hollow />
      <div className="artists__wrapper">
        <nav className="artists__list">
          {(filteredArtists ?? []).map((artist: Artist) => (
            <ArtistRow
              key={artist.slug}
              artist={artist}
              activeArtist={activeArtist}
              setActiveArtist={setActiveArtist}
            />
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
            <div className="artists__description">
              <p className="typescale-3">{activeArtist.bio}</p>
            </div>
            <Button
              target="_blank"
              light
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
      </div>
    </section>
  );
};

interface RowProps {
  artist: Artist;
  activeArtist?: Artist;
  // eslint-disable-next-line no-unused-vars
  setActiveArtist: (artist?: Artist) => void;
}

const ArtistRow = ({ artist, activeArtist, setActiveArtist }: RowProps) => {
  const rowRef = useRef(null);
  const contentRef = useRef(null);

  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);

  useEffect(() => {
    timeline
      .fromTo(
        contentRef.current,
        { duration: 0.2, z: 0, color: '#e0e1e3' },
        {
          duration: 0.2,
          z: 1,
          color: '#000'
        }
      )
      .fromTo(
        rowRef.current,
        { duration: 0.4, height: 0, width: '100%', x: 0, y: 35 },
        { duration: 0.4, height: '100%', width: '100%', x: 0, y: 0 }
      );
  }, [timeline]);

  const animate = (reverse?: boolean) => {
    if (reverse) {
      timeline.reverse();
      return;
    }

    timeline.play();
  };

  return (
    <div
      key={artist._id}
      className={`artists__artist ${artist.slug === activeArtist?.slug ? 'artists__artist--active' : ''}`}
    >
      <span className="artist-bg" ref={rowRef} />
      <li
        ref={contentRef}
        onClick={() => setActiveArtist(artist)}
        onMouseEnter={() => animate()}
        onMouseLeave={() => animate(true)}
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
          <div className="artists__description">
            <p className="typescale-3">{activeArtist.bio}</p>
          </div>
          <Button
            target="_blank"
            light
            small
            link={activeArtist?.url}
            label="View Profile"
            icon={<ViewIcon />}
          />
          <div className="artists__details-image">
            <Image objectFit="contain" fill src={activeArtist?.image} alt={activeArtist?.name} />
          </div>
        </div>
      )}
    </div>
  );
};

interface TagProps {
  title: string;
}

const Tag = ({ title }: TagProps) => <div className="tag typescale-2">{title}</div>;
