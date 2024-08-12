import Link from 'next/link';
import React from 'react';

import './tabs.scss';

export const Tabs = () => (
  <nav className="tabs">
    <li>
      <Link href="?query=all">All</Link>
    </li>
    <li>
      <Link href="?query=build-up">Build Up</Link>
    </li>
    <li>
      <Link href="?query=thursday">First Thursdays</Link>
    </li>
    <li>
      <Link href="?query=friday">Friday</Link>
    </li>
    <li>
      <Link href="?query=saturday">Saturday</Link>
    </li>
    <li>
      <Link href="?query=sunday">Sunday</Link>
    </li>
  </nav>
);
