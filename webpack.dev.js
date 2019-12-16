const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new BrowserSyncPlugin({
      notify: false,
      host: "0.0.0.0",
      port: 3000,
      proxy: "http://localhost:8080/",
      files: [
        {
          match: ["**/*.html"],
          fn: function(event, file) {
            if (event === "change") {
              const bs = require("browser-sync").get("bs-webpack-plugin");
              bs.reload();
            }
          }
        }
      ]
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist")
  }
});
