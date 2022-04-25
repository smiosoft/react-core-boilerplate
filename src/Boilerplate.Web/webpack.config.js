const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

require('dotenv').config();

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './ClientApp/index.jsx',
  output: {
    path: path.resolve(__dirname, 'wwwroot'),
    filename: !isDevelopment ? '[name].[chunkhash].js' : '[name].js',
    chunkFilename: !isDevelopment ? '[name].[chunkhash].chunk.js' : '[name].chunk.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      '~assets': path.resolve(__dirname, 'ClientApp/assets/'),
      '~components': path.resolve(__dirname, 'ClientApp/components/'),
      '~redux': path.resolve(__dirname, 'ClientApp/redux/'),
      '~style': path.resolve(__dirname, 'ClientApp/style/'),
      '~utils': path.resolve(__dirname, 'ClientApp/utils/'),
    },
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimize: !isDevelopment,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: { safari10: true },
          output: {
            ecma: 5,
            safari10: true,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    open: true,
    historyApiFallback: true,
    port: 9000,
    compress: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'clean-css-loader'
        ],
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'public',
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    isDevelopment && new ReactRefreshPlugin(),
    isDevelopment && new FriendlyErrorsWebpackPlugin(),
    !isDevelopment && new GenerateSW({ swDest: 'sw.js' }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './ClientApp/index.template.html',
      filename: 'index.html',
      favicon: './ClientApp/assets/images/favicon.png',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeScriptTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new WebpackPwaManifest({
      name: 'React Core Boilerplate',
      short_name: 'React Core Boilerplate',
      description: 'Boilerplate for building React apps hosted with ASP.NET Core.',
      theme_color: '#212121',
      background_color: '#212121',
      icons: [
        {
          src: path.resolve(__dirname, 'ClientApp/assets/images/favicon.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          ios: true,
        },
      ],
    }),
  ].filter(Boolean),
};
