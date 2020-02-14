const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(jpeg|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "img"
          }
        }
      },
      {
        test: /\.woff(2)?(\?[a-z0-9]+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.(ttf|eot)(\?[a-z0-9]+)?$/,
        loader: "file-loader"
      }
    ]
  }
};
