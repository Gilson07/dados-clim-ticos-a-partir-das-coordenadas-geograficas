module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json',
          ],
          alias: {
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@services': './src/services',
            '@routes': './src/routes',
            '@utils': './src/utils',
            '@global': './src/global',
          }
        }
      ]
    ]
  };
};