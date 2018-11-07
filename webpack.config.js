const path = require("path");
require('dotenv').config();
const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./client/src/"),
  output: {
    path: path.resolve(__dirname, "./client/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ["react", "env"]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.HOSTNAME': JSON.stringify(process.env.HOSTNAME),
      'process.env.PORT': JSON.stringify(process.env.PORT),
    })
  ]
};