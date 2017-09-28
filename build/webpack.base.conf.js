var webpack = require('webpack'),
  path = require('path'),
  // ENV = require('./config/ENV'),
  // PATHS = require('./config/PATHS'),
  config = require('./config'),
  styleRules = require('./config/style-rules'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  NyanProgressPlugin = require('nyan-progress-webpack-plugin')

// var env = process.env.NODE_ENV === 'production' ? config.prod.env : {'NODE_EN': config.__env__}

module.exports = {
  entry: {
    app: config.paths.SRC.join('apps.js')
  },
  // devtool - source map 配置详见 https://webpack.js.org/configuration/devtool
  devtool: false,
  output: {
    path: config.paths.DIST,
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': config.paths.SRC,
      'static': path.resolve(__dirname, '../static'),
      'jquery': 'jquery'
    }
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      options: {
        formatter: require('eslint-friendly-formatter')
      },
      enforce: 'pre',
      include: config.paths.SRC
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: styleRules.vueLoader
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader?cacheDirectory',
      include: config.paths.SRC
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 10240, // 10KB 以下使用 base64
        name: 'image/[name]-[hash:6].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)$/,
      loader: 'url-loader',
      options: {
        limit: 10240,
        name: 'fonts/[name]-[hash:6].[ext]'
      }
    }].concat(styleRules.basic)
  },
  plugins: [
    new NyanProgressPlugin(), // 进度条
    // new webpack.DefinePlugin(Object.assign({
    //   'process.env': env
    // }, env)),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: config.paths.SRC.join('index.html')
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
}
