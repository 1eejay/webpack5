const path = require('node:path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const createCommonConfig = require('./webpack.common')

module.exports = (config = {}) =>
  merge(createCommonConfig(config), {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(j|t)s$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: path.join(__dirname, '../.cache/babel'),
            },
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify({
          ...config.env,
          NODE_ENV: 'development',
        }),
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, '../static'),
        publicPath: '/static',
      },
    },
  })
