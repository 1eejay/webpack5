module.exports = (api) => {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '80',
        },
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
        },
      },
    ],
    '@babel/preset-typescript',
  ]
  const plugins = []

  return {
    presets,
    plugins,
  }
}
