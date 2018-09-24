const rewire = require('react-app-rewire-hot-loader')

module.exports = function override(config, env) {
  const newConfig = rewire(config, env)
  return newConfig;
 }
