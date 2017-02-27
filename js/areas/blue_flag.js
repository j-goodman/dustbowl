var Area = require('../area.js');
var Feature = require('../feature.js');
var Box = require('../box.js');
var Item = require('../item.js');
var Exit = require('../exit.js');

area = new Area ({
  description: "",
  name: 'blue_flag',
  worldMap: this,
  contents: [
    new Feature ({
      name: "blue flag",
      description: "You climb to the top of a loose dune to find the blue flag fixed into the top of it.",
      checkText: "The faded long rectangle of blue wool hangs from the top of a buried post.",
      verbs: ["check"],
    }),
    new Exit ({
      name: "red flag",
      description: "Behind you you can see a red flag in the distance.",
      checkText: "A red flag.",
      destinationName: 'red_flag',
      verbs: ["check", "go to"],
    }),
    new Exit ({
      name: "dry stream",
      description: "By the bottom of the dune on the side opposite the red flag, you can see a depression in the ground that looks like the bed of a long dry stream. You can descend the dune and go to it.",
      checkText: "A dry dusty trench that looks like it might have once been a stream. Some dry scraggled shrubs grow around it.",
      destinationName: 'dry_stream',
      verbs: ["check", "go to"],
    }),
  ],
});

module.exports = area;
