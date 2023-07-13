const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    index: path.resolve(__dirname, './src/index.ts')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  devtool: 'source-map',
  plugins: [],
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node'
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
