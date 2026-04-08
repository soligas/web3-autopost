/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'pbs.twimg.com'],
  },
  experimental: {
    mdxRs: true,
  },
}

module.exports = nextConfig
