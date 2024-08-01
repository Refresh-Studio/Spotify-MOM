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
    },
    {
      path: '../style/fonts/SpotifyMixWide-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../style/fonts/SpotifyMixWide-Bold.otf',
      weight: '700',
      style: 'normal'
    }
  ]
});
