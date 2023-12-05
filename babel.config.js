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
            '@components': './src/view/components',
            '@screens': './src/view/screens',
            '@assets': './src/assets',
            '@hooks': './src/app/hooks',
            '@services': './src/app/services',
            '@models': './src/app/models',
            '@utils': './src/app/utils',
            '@context': './src/app/context',
            '@lib': './src/app/lib',
            '@theme': './src/view/theme',
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
