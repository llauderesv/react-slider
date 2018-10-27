const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugIn = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devServer: {
    port: 3000,
  },
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'env'],
            plugins: ['transform-object-rest-spread'],
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.otf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
          },
        },
      },
      {
        test: /\.(PNG|png|jpg|JPG|jpeg|JPG|GIF|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader:
              /**
               *  Use Style laoder to automatic resolve the
               *  <link> tag in html when building it.
               */
              MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          /**
           * Use CSS Loader to automtic resolve all the
           * import css file in .jsx or js file.
           */
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugIn({
      title: 'Production',
      template: './index.html',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
