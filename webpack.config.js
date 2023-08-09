const webpackNodeExt = require("webpack-node-externals");
const path = require("path");

const config = {
  mode: "production",
  entry: "./build/index.js",
  target: "node",
  externals: [webpackNodeExt()],
  resolve: {
    modules: ["core"],
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.prod.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = [config];
