var express = require('express'),
  webpack = require('webpack'),
  // PATHS = require('./config/PATHS'),
  // PORTS = require('./config/PORTS'),
  config = require('./webpack.dev.conf'),
  // ENV = require('./config/ENV'),
  configure = require('./config'),
  proxy = require('http-proxy-middleware'),
  app = express()

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(configure.__env__)
}
var compiler = webpack(config)

// 提供静态资源服务
app.use('/static', express.static(configure.paths.STATIC))

// Mock server
app.use('/api', proxy({
  target: 'http://127.0.0.1:' + configure.dev.MOCK_SERVER,
  changeOrigin: true,
  pathRewrite: {
    // 重写 URL：[Dev Server]/api/xxx <=> [Mock Server]/xxx
    '^/api': '/'
  }
}))

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler))

app.listen(configure.dev.DEV_SERVER)
