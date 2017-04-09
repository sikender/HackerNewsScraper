var Xray = require('x-ray')
var x = Xray()

x('https://news.ycombinator.com/', '.athing', [{
  rank: '.rank',
  title: '.storylink',
  link: '.storylink@href'
  // link: '.panel-title a@href'
}]).write('results.json')
