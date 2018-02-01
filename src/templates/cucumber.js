require('babel-polyfill')
require('babel-register')({
  // This will override `node_modules` ignoring - you can alternatively pass
  // an array of strings to be explicitly matched or a regex / glob
  ignore: /node_modules\/(?!Authentication\/src\/constants\/automationID)/
})

var common = [
  '--compiler js:babel-register',
  `--format ${process.env.CI ? 'progress' : 'progress-bar'}`,
  '--format rerun:BDD/report/rerun.txt',
  '--format usage:BDD/report/usage.txt'
].join(' ')

module.exports = {
  default: common,
  'node-4': common + ' --tags "not @node-6"'
}
