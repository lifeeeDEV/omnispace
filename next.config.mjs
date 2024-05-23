import { defineConfig } from 'next/config';

export default defineConfig({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        child_process: false,
        readline: false,
        module: false,
        http: false,
        https: false,
      };
    }
    return config;
  },
});
