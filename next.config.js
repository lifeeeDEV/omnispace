module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          net: false,
          tls: false,
          child_process: false,
          readline: false,
          module: false,
        };
      }
      return config;
    },
  };
  