module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: ['.'],
          alias: { '@src': './src', '@assets': './assets' },
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json']
        }
      ]
    ]
  }
}
