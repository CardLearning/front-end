import type { NextConfig } from "next";

const projectRoot = process.cwd();

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  output: 'export',
  trailingSlash: true,
  turbopack: {
    root: projectRoot,
  },
  sassOptions: {
    loadPaths: [projectRoot],
    additionalData:
      '@use "src/styles/mixins.scss" as *; @use "src/styles/animation.scss" as *; @use "src/styles/typography.scss" as *;',
  },
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
