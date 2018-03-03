const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
  entry: [
    '@babel/polyfill',
    './src',
  ],
  mode: env,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: ['babel-loader'],
        include: path.join(__dirname, './src'),
      },
    ],
  },
};
