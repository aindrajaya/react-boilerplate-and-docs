//untuk menelusuri directory file
const path = require('path');

//untuk export module
module.exports = {
 "mode": "none",
 //entry point, dimana javascript dijalankan/diekesusi pertama kali
 "entry": "./src/index.js",
 //ketika di build ini akan generate otomatis
 "output": {
   "path": __dirname + '/dist',
   "filename": "coba.js"
 },
devServer: {
   contentBase: path.join(__dirname, 'dist')
 },
 //nentuin styling pada aplikasi. dimana file css itu di load ke dalam javascript
  "module": {
    "rules": [
      {
        "test": /\.css$/,
        "use": [
          "style-loader",
          "css-loader"
        ]
      },
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "@babel/preset-env",
            ]
          }
        }
      },
    ]
  }
}