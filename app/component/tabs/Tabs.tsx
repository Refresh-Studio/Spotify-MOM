'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';

import './tabs.scss';

export const Tabs = () => {
  const searchParams = useSearchParams();

  const query = useMemo(() => {
    return searchParams.get('query');
  }, [searchParams]);

  return (
    <nav className="tabs">
      <li className={`tabs__tab ${!query || query === 'all' ? 'tabs__tab--active' : ''}`}>
        <Link href="?query=all">All</Link>
      </li>
      <li className={`tabs__tab ${query === 'build-up' ? 'tabs__tab--active' : ''}`}>
        <Link href="?query=build-up">Build Up</Link>
      </li>
      <li className={`tabs__tab ${query === 'thursday' ? 'tabs__tab--active' : ''}`}>
        <Link href="?query=thursday">First Thursdays</Link>
      </li>
      <li className={`tabs__tab ${query === 'friday' ? 'tabs__tab--active' : ''}`}>
        <Link href="?query=friday">Friday</Link>
      </li>
      <li className={`tabs__tab ${query === 'saturday' ? 'tabs__tab--active' : ''}`}>
        <Link href="?query=saturday">Saturday</Link>
      </li>
      <li className={`tabs__tab ${query === 'sunday' ? 'tabs__tab--active' : ''}`}>
        <Link href="?query=sunday">Sunday</Link>
      </li>
    </nav>
  );
};
