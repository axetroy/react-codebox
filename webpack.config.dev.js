const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'example', 'src', 'index.js'),
  output: {
    filename: 'bundle.js'
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
  mode: "none",
  devServer: {
    contentBase: path.join(__dirname, "example")
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
};
