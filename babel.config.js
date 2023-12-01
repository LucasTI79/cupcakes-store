module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json'
          ],
          alias: {
            '@': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@models': './src/models',
            '@utils': './src/utils',
            '@context': './src/context',
            '@lib': './src/lib',
            '@theme': './src/theme',
          }
        }
      ],
      [
        'module:react-native-dotenv',
        {
          'moduleName': '@env',
          'allowUndefined': false
        }
      ]
    ]
  };
};
