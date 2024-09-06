import React, { useEffect, useState } from 'react';

import { Filter } from '../../../../interface/filter/filter.interface';

import { TabItem, Tabs } from '../../../component/tabs/Tabs';

import { getGalleryFilters } from '../../../../../sanity/sanity.query';
import { wideFont } from '../../../../constant';

import './hero.scss';

export const Hero = () => {
  const [filters, setFilters] = useState<TabItem[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const galleryFilters = await getGalleryFilters();
      setFilters([
        ...[
          {
            path: 'all',
            name: 'All'
          }
        ],
        ...galleryFilters.map((filter: Filter) => ({ path: filter.slug, name: filter.title }))
      ]);
    };

    callApi();
  }, []);

  return (
    <section className="gallery-hero light-section">
      <h1 className={`typescale-10 ${wideFont.className}`}>Gallery</h1>
      <p className="typescale-3">Relive the magic of MOM through her lens.</p>
      <Tabs tabs={filters} />
    </section>
  );
};
