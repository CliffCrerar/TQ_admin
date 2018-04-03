const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const ManifestPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const HtmlWebpackPlugin = require('Ht')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  target: 'node',
  //devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.exec\.js$/,
        use: ['script-loader']
      }
      /*
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
      */
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ADDRESS: JSON.stringify('http://34.242.179.249:8010/'),
      ADDRESSFS: JSON.stringify('http://34.242.179.249:8015')
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': "jquery'",
      'window.$': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new HTMLWebpackPlugin({
      title: 'TQ Admin Console',
      favicon: './src/img/favicon.svg'
    }),
    new CleanWebpackPlugin(['dist']),
    //new ManifestPlugin(['Manifest']),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
};
