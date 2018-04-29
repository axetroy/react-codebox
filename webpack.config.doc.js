const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "example", "src", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "docs")
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  mode: "production",
  devServer: {
    contentBase: path.join(__dirname, "example")
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "example", "index.html"),
        to: path.join(__dirname, "docs")
      }
    ])
  ]
};
