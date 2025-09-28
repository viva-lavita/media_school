/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: 'https',
    hostname: '**',
    port: '',
    pathname: '/**',
   },
   {
    protocol: 'http',
    hostname: '**',
    port: '',
    pathname: '/**',
   },
  ],
 },
 async rewrites() {
  return [
   {
    source: '/api/v1/content/experts/:path*',
    destination: 'http://217.114.11.243/api/v1/content/experts/:path*',
   },
  ];
 },
};

export default nextConfig;
