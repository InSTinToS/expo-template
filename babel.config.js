module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: { '@src': './src', '@assets': './assets' },
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json']
        }
      ],
      '@babel/plugin-transform-modules-commonjs',
      'nativewind/babel'
    ]
  }
}
