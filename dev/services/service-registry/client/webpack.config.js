"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const html = {
  filename: "index.html",
  template: "src/app/index.html"
};

module.exports = [{
  name: "host",
  context: __dirname,
  target: "node",
  node: {
    __dirname: false
  },
  entry: ["./src/host.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "host.js"
  },
  module: {
    rules: [{
      enforce: "pre",
      test: /\.js/,
      exclude: /node_modules/,
      use: [{
        loader: "eslint-loader"
      }]
    }, {
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
  target: "web",
  entry: "./src/app/index.js",
  output: {
    path: path.resolve(__dirname, "dist/app"),
    filename: "index.min.js"
  },
  module: {
    rules: [{
      enforce: "pre",
      test: /\.js/,
      exclude: /node_modules/,
      use: [{
        loader: "eslint-loader"
      }]
    }, {
      test: /\.js/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader"
      }]
    }]
  },
  resolve: {
    extensions: [
      ".js"
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: html.filename,
      template: html.template
    })
  ]
}];
