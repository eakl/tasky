'use strict'

const Path = require('path')
const Precss = require('precss')
const Autoprefixer = require('autoprefixer')

const PATHS = {
  entry: Path.resolve(__dirname, './src/index.js'),
  source: Path.resolve(__dirname, 'src'),
  build: Path.resolve(__dirname, 'build')
}

module.exports = {
  entry: PATHS.entry,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: PATHS.source,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          cacheDirectory: true
        }
      },
      {
        test:   /\.css$/,
        include: PATHS.source,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        include: PATHS.source,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10'
      }
    ]
  },
  postcss: function () {
    return [Precss, Autoprefixer]
  },
  devtool: 'eval-source-map'
}
