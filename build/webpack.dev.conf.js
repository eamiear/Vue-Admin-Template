var webpack = require('webpack'),
  // PORTS = require('./config/PORTS'),
  configure = require('./config'),
  config = require('./webpack.base.conf'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
  FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

config.output.filename = '[name].js'
config.output.chunkFilename = '[id].js'

// add hot-reload related code to entry chunk
config.entry.app = [
  'eventsource-polyfill',
  'webpack-hot-middleware/client?reload=true',
  config.entry.app
]
// enable devtool
config.devtool = '#source-map'
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': configure.dev.env
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new FriendlyErrorsPlugin(),
  new ExtractTextPlugin('[name].css'),
  new BrowserSyncPlugin({
    host: 'localhost',
    port: configure.dev.BROWSER_SYNC,
    proxy: 'localhost:' + configure.dev.DEV_SERVER,
    notify: false
  }, {
    reload: false
  })
)

module.exports = config
