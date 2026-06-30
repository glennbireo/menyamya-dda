import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export: the Authority's hosting is unconfirmed and may not
  // run a Node server, so the build must deploy as plain HTML/CSS/JS to any
  // web server (Apache/Nginx/IIS). This also disables the Next.js Image
  // optimization endpoint and API routes — see images.unoptimized below and
  // lib/forms.ts for the resulting tradeoffs.
  output: "export",
  images: {
    unoptimized: true,
  },
  // Emits route/index.html instead of route.html, which plain static
  // hosting serves correctly without needing URL rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
