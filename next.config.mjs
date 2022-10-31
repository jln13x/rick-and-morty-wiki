import withBundleAnalyzer from "@next/bundle-analyzer";

// @ts-check
/* run the build with this set to skip validation */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/**
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

const nextConfig = defineNextConfig({
  redirects: async () => [
    {
      source: "/",
      destination: "/characters",
      permanent: true,
    },
  ],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["rickandmortyapi.com", "avatars.githubusercontent.com"],
  },
});

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
