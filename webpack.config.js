const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('clean-webpack-plugin');
//const HtmlWebpackPlugin = require('Ht')

module.exports = {
  entry: './src/index.js',
  target: 'node',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
          outputPath: 'images/'
          //the images will be emmited to public/assets/images/ folder
          //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png);
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': "jquery'",
      'window.$': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new HTMLWebpackPlugin({
      title: 'TQ Admin Console'
    }),
    new CleanWebpackPlugin(['dist']),
    new ManifestPlugin(['Manifest'])
  ]
};
