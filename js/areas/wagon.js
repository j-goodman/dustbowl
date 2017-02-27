var Area = require('../area.js');
var Feature = require('../feature.js');
var Box = require('../box.js');
var Item = require('../item.js');
var Exit = require('../exit.js');

area = new Area ({
  description: "A small encampment.",
  name: 'wagon',
  worldMap: this,
  contents: [
    new Feature ({
      name: "plane",
      description: "In the middle of the divot is the half-buried ruin of a smoking plane fuselage.",
      checkText: "From nose to tail the plane is about 32' long, one wing is visible above the sand, badly bent and scraping the ground. The other one appears to be buried. A pillar of smoke rises from the still smoldering tail. In the underbelly of the plane is an open cargo hatch.",
      verbs: ["check"],
    }),
  ],
});

module.exports = area;


// A small encampment between two high dunes. Next to an enclosed wagon a mule is sleeping standing up, tied to a post under a woven cloth awning that stretches from the side of wagon. A spring of perfectly clear water reflects the blue sky above, about three feet in diameter and too deep to tell. Near the bubbling spring is an overturned crate, before which a wizard kneels chopping a yellow root vegetable. He doesn't seem to notice you.
