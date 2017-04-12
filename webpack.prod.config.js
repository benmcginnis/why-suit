const webpack = require('webpack');
const baseconf = require('./webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: baseconf.entry,
  output: {
    filename: '/[name].[ext]',
    publicPath: '',
    path: './dist/'
  },
  module: baseconf.module,
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    // new ExtractTextPlugin('styles.css', {allChunks: true}),
  ]
};
