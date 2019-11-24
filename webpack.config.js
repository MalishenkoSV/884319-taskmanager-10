
const path = require('path');
const pathPublick = path.join(__dirname, 'public')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: pathPublick,
  },
  devtool: 'source-map',
  devServer: {
    contentBase: pathPublick,
    watchContentBase: true,
  }
};
