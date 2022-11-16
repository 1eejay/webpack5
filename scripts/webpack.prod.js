const path = require('node:path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const createCommonConfig = require('./webpack.common')

module.exports = (config = {}) =>
  merge(createCommonConfig(config), {
    mode: 'production',
    output: {
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify({
          ...config.env,
          NODE_ENV: 'production',
        }),
      }),
      new MiniCssExtractPlugin(),
      new CssMinimizerPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../static'),
            to: path.resolve(__dirname, '../dist/static'),
          },
        ],
      }),
    ],
  })
