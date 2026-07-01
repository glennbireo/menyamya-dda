import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH=/menyamya-dda when deploying to GitHub Pages
// (github.com/glennbireo/menyamya-dda → served at /menyamya-dda/).
// Leave unset (empty string) for the production .gov.pg domain at root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Fully static export — deployable to any web server without Node.js.
  output: "export",
  // Sub-path support: GitHub Pages serves the site under /menyamya-dda/,
  // so Next.js must prefix all internal links and asset URLs accordingly.
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: true,
  },
  // Emits route/index.html so plain static hosts serve routes without rewrites.
  trailingSlash: true,
};

export default nextConfig;
