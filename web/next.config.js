const clearRequireCachePlugin = require('webpack-clear-require-cache-plugin');

exports.webpack = config =>
  Object.assign(config, {
    plugins: [
      ...config.plugins,
      clearRequireCachePlugin([
        /\.next\/server\/static\/development\/pages/,
        /\.next\/server\/ssr-module-cache.js/,
        /package/, // replace this with your own module name
      ]),
    ],
  });