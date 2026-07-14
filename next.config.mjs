import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const NEW_DOCS = 'https://solana.com/docs/tools/litesvm';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy crate paths were reorganized under additional-crates/ before the
      // move to solana.com, so map them straight to their final home.
      {
        source: '/docs/testing-with-anchor-litesvm/:path*',
        destination: `${NEW_DOCS}/additional-crates/testing-with-anchor-litesvm/:path*`,
        permanent: true,
      },
      {
        source: '/docs/testing-with-litesvm-utils/:path*',
        destination: `${NEW_DOCS}/additional-crates/testing-with-litesvm-utils/:path*`,
        permanent: true,
      },
      {
        source: '/docs/testing-with-spl-tokens/:path*',
        destination: `${NEW_DOCS}/additional-crates/testing-with-spl-tokens/:path*`,
        permanent: true,
      },
      // The docs tree maps 1:1 onto solana.com, so forward each page to its match.
      {
        source: '/docs/:path*',
        destination: `${NEW_DOCS}/:path*`,
        permanent: true,
      },
      // Anything else (home page, unknown links) falls back to the docs root.
      {
        source: '/:path*',
        destination: NEW_DOCS,
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
