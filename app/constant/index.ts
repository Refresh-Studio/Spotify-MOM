import localFont from 'next/font/local';

export const defaultFont = localFont({
  src: [
    {
      path: '../style/fonts/SpotifyMix-Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ]
});

export const wideFont = localFont({
  src: [
    {
      path: '../style/fonts/SpotifyMixWide-Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ]
});
