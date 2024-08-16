'use client';

import React, { useEffect, useState } from 'react';

import { Artist } from '../../../interface/artist/artist.interface';

import { getArtists } from '../../../../sanity/sanity.query';
import { wideFont } from '../../../constant';
import { Button } from '../button/Button';
import { Ticker } from '../ticker/Ticker';
import { ArtistTick } from '../ticker/artists/ArtistTick';

import './acts.scss';

interface Props {
  accessToken: string;
}

export const Acts = ({ accessToken }: Props) => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const artists = await getArtists();
      // const spotifyArtists = await retrieveArtists(
      //   accessToken,
      //   artists.map((artist: Artist) => artist.slug)
      // );
      // const mappedArtists = artists.reduce((accum: Artist[], item: Artist) => {
      //   const spotifyArtist = spotifyArtists.find(
      //     (artist: { slug: string }) => artist.slug === item.slug
      //   );
      //   if (spotifyArtist) {
      //     accum.push({
      //       ...item,
      //       ...spotifyArtist
      //     });
      //   }
      //
      //   return accum;
      // }, []);

      artists.sort((a: Artist, b: Artist) => a.name.localeCompare(b.name));
      setArtists(artists);
    };

    if (accessToken) {
      callApi();
    }
  }, [accessToken]);

  const normalList = [...artists];
  normalList.sort();

  const followersList = [...artists];
  followersList.sort((a: Artist, b: Artist) => a.followers - b.followers);

  const nameList = [...artists];
  nameList.sort((a: Artist, b: Artist) => a.name.localeCompare(b.name));

  return (
    <section className="acts">
      <header>
        <div>
          <p className={`typescale-6 ${wideFont.className}`}>
            <span>More than 50</span> acts
          </p>
          <p className={`typescale-6 ${wideFont.className}`}>
            <span>More</span> being announced
          </p>
        </div>
        <Button small link="/artists" label="View All Artists" />
      </header>
      <main>
        <Ticker hollow height={77} speed={10}>
          {normalList.map((artist: Artist) => (
            <ArtistTick key={artist.slug} name={artist.name} image={artist.image} />
          ))}
        </Ticker>
        <Ticker hollow height={77} right speed={10}>
          {followersList.map((artist: Artist) => (
            <ArtistTick key={artist.slug} name={artist.name} image={artist.image} />
          ))}
        </Ticker>
        <Ticker hollow height={77} speed={10}>
          {nameList.map((artist: Artist) => (
            <ArtistTick key={artist.slug} name={artist.name} image={artist.image} />
          ))}
        </Ticker>
      </main>
      <footer>
        <Button small link="/artists" label="View All Artists" />
      </footer>
    </section>
  );
};
