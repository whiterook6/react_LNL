const path = require("path");

module.exports = {
  output: {
    chunkFilename: "[name].bundle.js",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    historyApiFallback: true,
  },
};
