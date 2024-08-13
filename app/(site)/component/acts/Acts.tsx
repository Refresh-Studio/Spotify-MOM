import React from 'react';

import { Artist } from '../../../interface/artist/artist.interface';

import { getArtists } from '../../../../sanity/sanity.query';
import { wideFont } from '../../../constant';
import { Button } from '../button/Button';
import { Ticker } from '../ticker/Ticker';
import { ArtistTick } from '../ticker/artists/ArtistTick';

import './acts.scss';

export const Acts = async () => {
  const artists = await getArtists();

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
        <Button small label="View All Artists" />
      </footer>
    </section>
  );
};
