var Area = require('../area.js');
var Feature = require('../feature.js');
var Box = require('../box.js');
var Item = require('../item.js');
var Exit = require('../exit.js');

area = new Area ({
  description: "",
  name: 'red_flag',
  worldMap: this,
  contents: [
    new Feature ({
      name: "red flag",
      description: "You reach a red flag hanging from the top of an eight-foot wooden post.",
      checkText: "The post seems to be buried deep in the earth, and is fixed fast when you try to pull on it. The flag itself seems to be dyed wool, a faded and frayed red.",
      verbs: ["check"],
    }),
    new Exit ({
      name: "smoke",
      description: "In the distance you can see a plume of smoke rising over the desert haze. It looks close enough to go to.",
      checkText: "A pillar of smoke in the distance, rising out of a low depression in the desert ground.",
      destinationName: 'crashsite',
      verbs: ["check", "go to"],
    }),
    new Exit ({
      name: "blue flag",
      description: "Opposite the smoke you can barely make out on a distant dune a blue flag, similar to the red one.",
      checkText: "A blue flag in the distance rising out of a dune. You can go to it from here.",
      destinationName: 'blue_flag',
      verbs: ["check", "go to"],
    }),
  ],
});

module.exports = area;
