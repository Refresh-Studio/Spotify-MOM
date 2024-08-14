import React, { useEffect, useState } from 'react';

import { Filter } from '../../../../interface/filter/filter.interface';

import { TabItem, Tabs } from '../../../component/tabs/Tabs';

import { getArtistFilters } from '../../../../../sanity/sanity.query';
import { wideFont } from '../../../../constant';

import './hero.scss';

export const Hero = () => {
  const [filters, setFilters] = useState<TabItem[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const artistFilters = await getArtistFilters();
      setFilters([
        ...[
          {
            path: 'all',
            name: 'All'
          }
        ],
        ...artistFilters.map((filter: Filter) => ({ path: filter.slug, name: filter.title }))
      ]);
    };

    callApi();
  }, []);

  return (
    <section className="artists-hero light-section">
      <h1 className={`typescale-11 ${wideFont.className}`}>The Artists</h1>
      <Tabs tabs={filters} />
    </section>
  );
};
