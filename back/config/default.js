const ENV = process.env.NODE_ENV || 'development'
const { version } = require('package.json')

module.exports = {
  APP: {
    ENV,
    PORT: 4040,
    VERSION: version,
  },
}
