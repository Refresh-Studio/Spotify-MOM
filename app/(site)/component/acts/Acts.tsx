'use client';

import React, { useEffect, useState } from 'react';

import { Artist } from '../../../interface/artist/artist.interface';

import { getArtists } from '../../../../sanity/sanity.query';
import { retrieveArtist } from '../../../../spotify/spotify.client';
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
      const artistPromises = artists.map(
        async (artist: Artist) => await retrieveArtist(accessToken, artist.slug)
      );

      const spotifyArtists = await Promise.all(artistPromises);
      const mappedArtists = artists.reduce((accum: Artist[], item: Artist) => {
        const spotifyArtist = spotifyArtists.find((artist) => artist.slug === item.slug);
        if (spotifyArtist) {
          accum.push({
            ...item,
            ...spotifyArtist
          });
        }

        return accum;
      }, []);

      setArtists(mappedArtists);
    };

    if (accessToken) {
      callApi();
    }
  }, [accessToken]);

  return (
    <section className="acts">
      <header>
        <div>
          <p className={`typescale-6 ${wideFont.className}`}>
            <span>More than 50</span> acts
          </p>
          <p className={`typescale-6 ${wideFont.className}`}>
            <span>4</span> venues
          </p>
          <p className={`typescale-6 ${wideFont.className}`}>
            <span>4</span> days
          </p>
        </div>
        <Button small link="/artists" label="View All Artists" />
      </header>
      <main>
        <Ticker hollow height={77} speed={10}>
          {artists.map((artist: Artist) => (
            <ArtistTick key={artist.slug} name={artist.name} image={artist.image} />
          ))}
        </Ticker>
        <Ticker hollow height={77} right speed={10}>
          {artists.map((artist: Artist) => (
            <ArtistTick key={artist.slug} name={artist.name} image={artist.image} />
          ))}
        </Ticker>
        <Ticker hollow height={77} speed={10}>
          {artists.map((artist: Artist) => (
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
