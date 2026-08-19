import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Vercel supplies its own Next.js build adapter and does not use standalone output.
// Next.js 16.3 currently fails when that adapter and standalone tracing run together.
const nextConfig: NextConfig = process.env.VERCEL
  ? {}
  : { output: "standalone" };

export default nextConfig;

initOpenNextCloudflareForDev();
