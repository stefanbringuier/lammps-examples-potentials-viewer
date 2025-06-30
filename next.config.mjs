/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/lammps-examples-potentials-viewer' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lammps-examples-potentials-viewer/' : '',
}

export default nextConfig
