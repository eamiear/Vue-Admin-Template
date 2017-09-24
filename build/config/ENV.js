var env = (process.env.NODE_ENV || 'development').trim()
console.log('[Current environment]', env)

module.exports = {
  __ENV__: env,
  __DEV__: env === 'development',
  __PROD__: env === 'production',
  BASE_API: '"https://api-dev"',
  APP_ORIGIN: '"https://wallstreetcn.com"'
}
