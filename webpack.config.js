const path = require('path');

module.exports = {
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  entry: './src/index.js',
  externals: {
    "createjs": "createjs",
    "jquery": "jQuery"
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
