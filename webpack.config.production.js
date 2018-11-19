const { resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// var definePlugin = new webpack.DefinePlugin({
//   __NODE_ENV__: JSON.stringify("production")
// });

module.exports = {
  context: __dirname,
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: resolve(__dirname, "public"),
    publicPath: "public/",
    filename: "[name].js"
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src", "index.html"),
      filename: resolve(__dirname, "index.html")
    }),
    // definePlugin,
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: resolve(__dirname, "src"),
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]"
        ]
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    alias: {
      src: resolve(__dirname, "src")
    },
    extensions: [".js", ".json"]
  }
};
