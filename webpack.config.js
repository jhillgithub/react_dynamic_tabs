var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: /src/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"],
          plugins: ["transform-decorators-legacy"],
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  devtool: 'inline-source-map'
};
