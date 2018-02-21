const path = require('path');
const webpack = require('webpack');
// const webpack = require('webpack-dev-server');


module.exports = {
  entry: './Client/index.js',
  output: {
    path: path.resolve(__dirname, './Build'),
    filename: 'webpack-bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "./Build"),
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
        test: /\.css$/,
        use: [
          {loader: "style-loader" }, 
          {loader: "css-loader"}
        ]
      }
    ]
  }
};