import React, { useMemo, useState } from 'react';

import { wideFont } from '../../../constant';

import './banner.scss';
import { ArtistDetailsModal } from '../artist-details-modal/ArtistDetailsModal';

export const Banner = () => {
  const [open, setOpen] = useState<boolean>(false);

  // const isDesktop = useMemo(() => window.screen.width >= 1024, []);

  return (
    <section className="banner" onClick={true ? (() => setOpen(true)) : () => {}}>
      {true &&
        <ArtistDetailsModal open={open} onClose={() => setOpen(false)} />}
      <div>
        <h1 className={`typescale-8 ${wideFont.className}`}>
          DISCOVER. EMERGING. <br /> COMMUNITY.
        </h1>
      </div>
    </section>
  );
};
