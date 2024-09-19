/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://www.spotifymom.com/:path*',
        permanent: true
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: ''
      },
      {
        hostname: 'dummyimage.com'
      }
    ]
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
    fileLoaderRule.exclude = /\.svg$/i;

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/ // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack', 'url-loader']
      }
    );

    return config;
  },

  reactStrictMode: process.env.NODE_ENV === 'development'
};

export default nextConfig;
