import Image from 'next/image';
import React from 'react';

import './artist.scss';

export const Artist = () => (
  <article className="artist">
    <p>
      <small>Esther Howard</small>
    </p>
    <Image
      width={70}
      height={77}
      alt="Artist in ticker"
      src="https://s3-alpha-sig.figma.com/img/a430/51c7/b165cab274f686f1c1c16b83611be9cb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOildzdkHWBQ5BJ~ZN1qarzx1pwaTgnem8CAkFt3NDlUK-Zk0T0OXgWTcBy4Wb99e3nLjhop9i1-iFg-bvr0GRvAyZj5osf5nqfomgCoBkDrQ2xrt2DBj~0uEscxGdpmM1XJ1UMOkZbvshSgu6ikSLfJlL5SCtlvLlPot2VkMbPNhKEzq3UspKy-5u8lOD5qqtTH6b5zhHZOFWSLStgzufI4r2K1xdV~NXurVT4DbkYILeWHMMJDs8cb9nPiBx-WFj~HIGhUv9j6oZTkZ7OCwVaJZo7Z35D4ZIcbVK56AZqBs5GdQ6lNsLwasMSZKpfHC8WNRaykTazHhVq~vugstQ__"
    />
  </article>
);
