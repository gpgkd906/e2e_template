var opts = process.argv.slice(2)
if (opts.indexOf('--config') === -1) {
  opts = opts.concat(['--config', 'test/e2e/nightwatch.conf.js'])
}
if (opts.indexOf('--env') === -1) {
  opts = opts.concat(['--env', 'chrome'])
}

var spawn = require('cross-spawn')
spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' })
