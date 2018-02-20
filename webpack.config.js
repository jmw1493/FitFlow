const path = require('path');
const webpack = require('webpack');
// const webpack = require('webpack-dev-server');


module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'webpack-bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader" }, 
          {loader: "css-loader"}, 
        ]
      }
    ]
  }
};