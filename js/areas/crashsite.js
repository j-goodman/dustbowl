var Area = require('../area.js');
var Feature = require('../feature.js');
var Box = require('../box.js');
var Item = require('../item.js');
var Exit = require('../exit.js');

area = new Area ({
  description: "You're in a low depression among a vast flat desert.",
  name: 'crashsite',
  worldMap: this,
  contents: [
    new Feature ({
      name: "plane",
      description: "In the middle of the divot is the half-buried ruin of a smoking plane fuselage.",
      checkText: "From nose to tail the plane is about 32' long, one wing is visible above the sand, badly bent and scraping the ground. The other one appears to be buried. A pillar of smoke rises from the still smoldering tail. In the underbelly of the plane is an open cargo hatch.",
      verbs: ["check"],
    }),
    new Box ({
      name: "cargo hatch",
      description: "",
      emptyText: "There's nothing in or around the bag.",
      contents: [
        new Item ({
          name: "tin can",
          checkText: "A tin can of beans with the label ripped off.",
          description: "The only thing next to the scraps of the bag is a tin can of beans. The label has been ripped off and canine teeth marks are visible in the metal of the can. <br><br> You can get the tin can if you want it",
          verbs: ["check", "get"],
        }),
      ],
      checkText: "The acrid smell of burning rubber flows from the cargo hatch. A leather bag is inside, shredded wide open from the bottom.",
      verbs: ["check"],
    }),
    new Exit ({
      name: "door",
      description: "On top of the plane is an open door.",
      checkText: "The interior of the plane is completely dark.",
      destinationName: 'plane',
      verbs: ["check", "go to"],
    }),
    new Exit ({
      name: "red flag",
      description: "<br><br>In the distance through the low-hanging desert haze you see a red flag hanging still. It looks close enough to go to.",
      checkText: "The red flag hangs slack from a tall pole.",
      destinationName: 'red_flag',
      verbs: ["check", "go to"],
    }),
  ],
});

module.exports = area;
