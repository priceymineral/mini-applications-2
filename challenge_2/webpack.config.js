const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
}

console.log('__dirname: ', __dirname);