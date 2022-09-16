module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PASSWORD_PROTECT: process.env.NODE_ENV === 'production'
  }
}
