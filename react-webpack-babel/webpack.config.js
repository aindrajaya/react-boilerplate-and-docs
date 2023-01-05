//untuk menelusuri directory file
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

//untuk export module
module.exports = {
  mode: "none",
  //entry point, dimana javascript dijalankan/diekesusi pertama kali
  entry: "./src/index.js",
  //ketika di build ini akan generate otomatis
  output: {
    path: __dirname + '/dist',
    filename: "coba.js"
  },
  devServer: {
   contentBase: path.join(__dirname, 'dist')
  },
  //nentuin styling pada aplikasi. dimana file css itu di load ke dalam javascript
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
            ]
          }
        }
      },
    ]
  },
  plugins : [
    new MiniCssExtractPlugin({
      filename: "index.css",
      chunkFilename: "index.css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}