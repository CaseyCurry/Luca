"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const html = {
  filename: "index.html",
  template: path.resolve(__dirname, "../src/app/index.html")
};

module.exports = [{
  entry: ["mocha-loader!./spec/index.js"],
  devServer: {
    host: "localhost",
    port: 13001
  },
  devtool: "inline-sourcemap",
  plugins: [new HtmlWebpackPlugin({
    filename: "specs.html"
  })],
  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader"
      }]
    }]
  }
}, {
  name: "app",
  context: __dirname,
  entry: "../src/app/index.js",
  output: {
    path: "/",
    filename: "index.min.js"
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      enforce: "pre",
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      use: [{
        loader: "eslint-loader"
      }]
    }, {
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader"
      }]
    }, {
      test: /\.scss/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: ["css-loader", "sass-loader"]
      })
    }]
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".scss"
    ]
  },
  devtool: "inline-sourcemap",
  plugins: [
    new ExtractTextPlugin("luca.css"),
    new HtmlWebpackPlugin({
      filename: html.filename,
      template: html.template
    })
  ]
}];
