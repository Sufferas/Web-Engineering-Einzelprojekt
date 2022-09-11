const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      index: './src/javascript/index.js',
      print: './src/javascript/print.js',
      navscript: './src/javascript/navscript.js',
      funcat:'./src/javascript/funcat.js',
      dom:'./src/javascript/dom.js',
      form:'./src/javascript/form.js',
      validform:'./src/javascript/validform.js',

  },
  devtool: 'inline-source-map',
    devServer: {
    static: './dist',
  },
  plugins: [
     new HtmlWebpackPlugin({
      title: 'Development',
     }),
   ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
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