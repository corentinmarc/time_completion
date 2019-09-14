const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",

  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.tpl.html")
    })
  ],

  module: {
    rules: [
      {
        test: /.css$/,
        loader: "style-loader!css-loader",
        exclude: [/node_modules/]
      },
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: [/node_modules/],
        loader: "babel-loader"
      }
    ]
  },

  devServer: {
    open: true
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
