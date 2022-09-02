const path = require('path');

module.exports = {
    entry: {
      index: './src/javascript/index.js',
      print: './src/javascript/print.js',
      navscript: './src/javascript/navscript.js',
      funcat:'./src/javascript/funcat.js',
      dom:'./src/javascript/dom.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
        {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};