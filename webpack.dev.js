const webpack = require("webpack");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { plugins } = require("@babel/preset-env/lib/plugins-compat-data");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/client/js/index.js"),
  devtool: "source-map",
  stats: "verbose",
  output: {
    libraryTarget: "var",
    library: "Client",
    filename: "bundle.js",
  },
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: "/.js$/",
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["env", { modules: false }]],

            plugins: ["syntax-dynamic-import"],

            env: {
              test: {
                plugins: ["@babel/plugin-transform-modules-commonjs"],
              },
            },
          },
        },
      },
    ],
  },
  devServer: {
    static: './dist',
    hot: true,
  },
  plugins: [
    new Dotenv(),
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "lang-website",
      filename: "index.html",
      template: "src/client/html/index.html",
    }),
    new WorkboxPlugin.GenerateSW({
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
};