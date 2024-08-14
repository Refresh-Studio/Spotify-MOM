'use client';

import React, { useEffect, useState } from 'react';

import { Filter } from '../../../../interface/filter/filter.interface';

import { TabItem, Tabs } from '../../../component/tabs/Tabs';

import { getEventFilters } from '../../../../../sanity/sanity.query';
import { wideFont } from '../../../../constant';

import './hero.scss';

interface Props {
  ticketCount: number;
}

export const Hero = ({ ticketCount }: Props) => {
  const [filters, setFilters] = useState<TabItem[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const eventFilters = await getEventFilters();
      setFilters([
        ...[
          {
            path: 'all',
            name: 'All'
          }
        ],
        ...eventFilters.map((filter: Filter) => ({ path: filter.slug, name: filter.title }))
      ]);
    };

    callApi();
  }, []);

  return (
    <section className="tickets-hero light-section">
      <h1 className={`typescale-11 ${wideFont.className}`}>Tickets</h1>
      <Tabs tabs={filters} />
    </section>
  );
};
