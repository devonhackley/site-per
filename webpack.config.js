'use strict';
require('dotenv').load();

const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'eval',
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
  },
  devServer: {
    historyApiFallback:true,
  },
  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/app/index.html`
    }),
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      {
        test: /\.html$/,
        loader: 'html-loader',
      },

      {
        test:/\.scss/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','resolve-url-loader', 'sass-loader'],
        })
      },
      {
        test: /\.(jpg|jpeg|bmp|tiff|gif|png)$/,
        loader: 'url-loader?limit=10000&name=image/[hash].[ext]',
      },
      {
        test: /\.(woff|ttf|svg|eot).*/,
        loader: 'url-loader?limit=10000&name=font/[name].[ext]',
      },
    ]
  }
}
