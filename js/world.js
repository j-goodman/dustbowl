var Area = require('./area.js');
var Exit = require('./exit.js');
var Feature = require('./feature.js');

var worldMap = {};

worldMap.plane = require('./areas/plane.js');
worldMap.crashsite = require('./areas/crashsite.js');
worldMap.red_flag = require('./areas/red_flag.js');
worldMap.blue_flag = require('./areas/blue_flag.js');
worldMap.dry_stream = require('./areas/dry_stream.js');

module.exports = worldMap;
