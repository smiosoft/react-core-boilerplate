const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = (env, argv) => {
  const { mode } = argv;

  return {
    entry: ['react-hot-loader/patch', './ClientApp/index.jsx'],
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[name].[chunkhash].chunk.js',
      path: path.resolve(__dirname, 'wwwroot'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    optimization: {
      minimize: mode !== 'development',
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            parse: {
              ecma: 8,
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
          sourceMap: false,
          cache: true,
        }),
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 20,
        name: true,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            priority: 40,
          },
          lib: {
            test(module) {
              return module.size() > 160000;
            },
            name(module, chunks, cacheGroupKey) {
              const moduleFileName = module.identifier().split('/').reduceRight((item) => item);
              const allChunksNames = chunks.map((item) => item.name).join('~');
              return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            chunks: 'all',
            priority: 20,
          },
          shared: {
            name: false,
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
      },
      runtimeChunk: true,
    },
    devServer: {
      contentBase: path.join(__dirname, 'wwwroot'),
      historyApiFallback: true,
      port: 9000,
      compress: true,
      quiet: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader?cacheDirectory=true',
        },
        {
          test: /\.css$/,
          use: [
            'cache-loader',
            ExtractCssChunks.loader,
            'css-loader',
            'clean-css-loader',
          ],
        },
        {
          test: /\.(jpe?g|png|webp|gif|svg|ico)$/i,
          use: [
            'cache-loader',
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                fallback: 'file-loader?name="[path][name].[ext]"',
              },
            },
            {
              loader: 'img-loader',
              options: {
                plugins: mode === 'production' && [
                  require('imagemin-mozjpeg')({
                    progressive: true,
                  }),
                  require('imagemin-pngquant')({
                    floyd: 0.5,
                    speed: 5,
                  }),
                  require('imagemin-webp'),
                  require('imagemin-svgo'),
                ],
              },
            },
          ],
        },
        {
          test: /\.(woff2|woff)$/,
          use: [
            'cache-loader',
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('ClientApp/template.html'),
        filename: 'index.html',
        favicon: path.resolve('ClientApp/assets/images/favicon.png'),
        output: path.resolve('wwwroot'),
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
      new ExtractCssChunks(
        {
          filename: '[name].css',
          chunkFilename: '[id].css',
          hot: true,
        },
      ),
      new ScriptExtHtmlWebpackPlugin({
        prefetch: [/\.js$/],
        defaultAttribute: 'async',
      }),
      new HashedModuleIdsPlugin({
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 20,
      }),
      new WebpackPwaManifest({
        name: 'React Core Boilerplate',
        short_name: 'React Core Boilerplate',
        description: 'Boilerplate for building React apps hosted with ASP.NET Core.',
        theme_color: '#212121',
        background_color: '#212121',
        icons: [
          {
            src: path.resolve('ClientApp/assets/images/favicon.png'),
            sizes: [36, 48, 72, 96, 144, 192, 512],
            ios: true,
          },
        ],
      }),
      new GenerateSW({
        swDest: 'sw.js',
        importWorkboxFrom: 'local',
        clientsClaim: true,
        skipWaiting: true,
      }),
      new HardSourceWebpackPlugin(),
      new FriendlyErrorsWebpackPlugin(),
    ],
  };
};
