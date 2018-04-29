const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd"
  },
  externals: {
    react: "react",
    "prop-types": "prop-types"
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
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    })
  ]
};
