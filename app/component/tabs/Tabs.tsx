'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';

import './tabs.scss';

export interface TabItem {
  name: string;
  path: string;
}

interface Props {
  tabs: readonly TabItem[];
  hollow?: boolean;
}

export const Tabs = ({ tabs = [], hollow = false }: Props) => {
  const searchParams = useSearchParams();

  const query = useMemo(() => {
    return searchParams.get('query');
  }, [searchParams]);

  return (
    <nav className={`tabs ${hollow ? 'tabs--hollow' : ''}`}>
      {tabs.map((tab: TabItem) => (
        <li key={tab.path} className={`tabs__tab ${query === tab.path ? 'tabs__tab--active' : ''}`}>
          <Link href={`?query=${tab.path}`} className="typescale-4 tabs__link">
            {tab.name}
          </Link>
        </li>
      ))}
    </nav>
  );
};
