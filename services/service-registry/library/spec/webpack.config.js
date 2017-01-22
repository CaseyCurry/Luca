"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");

const configs = [];
configs.push({
  entry: ["mocha!./spec/index.js"],
  devServer: {
    host: "localhost",
    port: 11998
  },
  devtool: "inline-sourcemap",
  plugins: [new HtmlWebpackPlugin({
    filename: "specs.html"
  })],
  module: {
    loaders: [{
      test: /\.js/,
      exclude: [/node_modules/],
      loader: "babel-loader"
    }]
  }
});

module.exports = configs;
