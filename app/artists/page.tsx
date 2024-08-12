import React from 'react';

import { Artists } from './component/artists/Artists';
import { Hero } from './component/hero/Hero';

const MOCK_ARTISTS = [
  {
    id: 1,
    name: 'Test Artist',
    image:
      'https://s3-alpha-sig.figma.com/img/a430/51c7/b165cab274f686f1c1c16b83611be9cb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOildzdkHWBQ5BJ~ZN1qarzx1pwaTgnem8CAkFt3NDlUK-Zk0T0OXgWTcBy4Wb99e3nLjhop9i1-iFg-bvr0GRvAyZj5osf5nqfomgCoBkDrQ2xrt2DBj~0uEscxGdpmM1XJ1UMOkZbvshSgu6ikSLfJlL5SCtlvLlPot2VkMbPNhKEzq3UspKy-5u8lOD5qqtTH6b5zhHZOFWSLStgzufI4r2K1xdV~NXurVT4DbkYILeWHMMJDs8cb9nPiBx-WFj~HIGhUv9j6oZTkZ7OCwVaJZo7Z35D4ZIcbVK56AZqBs5GdQ6lNsLwasMSZKpfHC8WNRaykTazHhVq~vugstQ__',
    url: 'https://www.google.com',
    followers: 23636326,
    tags: ['Hip-Hop']
  },
  {
    id: 2,
    name: 'Rock Artist',
    image:
      'https://s3-alpha-sig.figma.com/img/a430/51c7/b165cab274f686f1c1c16b83611be9cb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOildzdkHWBQ5BJ~ZN1qarzx1pwaTgnem8CAkFt3NDlUK-Zk0T0OXgWTcBy4Wb99e3nLjhop9i1-iFg-bvr0GRvAyZj5osf5nqfomgCoBkDrQ2xrt2DBj~0uEscxGdpmM1XJ1UMOkZbvshSgu6ikSLfJlL5SCtlvLlPot2VkMbPNhKEzq3UspKy-5u8lOD5qqtTH6b5zhHZOFWSLStgzufI4r2K1xdV~NXurVT4DbkYILeWHMMJDs8cb9nPiBx-WFj~HIGhUv9j6oZTkZ7OCwVaJZo7Z35D4ZIcbVK56AZqBs5GdQ6lNsLwasMSZKpfHC8WNRaykTazHhVq~vugstQ__',
    url: 'https://www.google.com',
    followers: 235325,
    tags: ['Rock', 'Alternative']
  },
  {
    id: 3,
    name: 'Metal Artist',
    image:
      'https://s3-alpha-sig.figma.com/img/a430/51c7/b165cab274f686f1c1c16b83611be9cb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOildzdkHWBQ5BJ~ZN1qarzx1pwaTgnem8CAkFt3NDlUK-Zk0T0OXgWTcBy4Wb99e3nLjhop9i1-iFg-bvr0GRvAyZj5osf5nqfomgCoBkDrQ2xrt2DBj~0uEscxGdpmM1XJ1UMOkZbvshSgu6ikSLfJlL5SCtlvLlPot2VkMbPNhKEzq3UspKy-5u8lOD5qqtTH6b5zhHZOFWSLStgzufI4r2K1xdV~NXurVT4DbkYILeWHMMJDs8cb9nPiBx-WFj~HIGhUv9j6oZTkZ7OCwVaJZo7Z35D4ZIcbVK56AZqBs5GdQ6lNsLwasMSZKpfHC8WNRaykTazHhVq~vugstQ__',
    url: 'https://www.google.com',
    followers: 2346,
    tags: ['Rock', 'Metal']
  },
  {
    id: 4,
    name: 'Jazz Artist',
    image:
      'https://s3-alpha-sig.figma.com/img/a430/51c7/b165cab274f686f1c1c16b83611be9cb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOildzdkHWBQ5BJ~ZN1qarzx1pwaTgnem8CAkFt3NDlUK-Zk0T0OXgWTcBy4Wb99e3nLjhop9i1-iFg-bvr0GRvAyZj5osf5nqfomgCoBkDrQ2xrt2DBj~0uEscxGdpmM1XJ1UMOkZbvshSgu6ikSLfJlL5SCtlvLlPot2VkMbPNhKEzq3UspKy-5u8lOD5qqtTH6b5zhHZOFWSLStgzufI4r2K1xdV~NXurVT4DbkYILeWHMMJDs8cb9nPiBx-WFj~HIGhUv9j6oZTkZ7OCwVaJZo7Z35D4ZIcbVK56AZqBs5GdQ6lNsLwasMSZKpfHC8WNRaykTazHhVq~vugstQ__',
    url: 'https://www.google.com',
    followers: 2237347437000,
    tags: ['Jazz', 'Instrumental']
  }
];

const ArtistsPage = () => (
  <main>
    <Hero />
    <Artists artists={MOCK_ARTISTS} />
  </main>
);

export default ArtistsPage;
