const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");

const base = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,

      }, {
        test: /\.(svg|jpg|woff|ttf|png)$/,
        loader: "file-loader",
      }, {
        test: /\.ico/,
        loader: "file-loader?name=[name].ico"  // <-- retain original file name
      }, {
        test: /\.(css|scss)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      inject: true,
      baseUrl: "/",
    }),
  ],
}

const version = require(`./build/webpack.${process.env.NODE_ENV}.config`);

module.exports = merge(base, version);
