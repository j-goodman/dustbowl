var Area = require('../area.js');
var Feature = require('../feature.js');
var Box = require('../box.js');
var Item = require('../item.js');
var Exit = require('../exit.js');

area = new Area ({
  description: "A dried-up stream.",
  name: 'red_flag',
  worldMap: this,
  contents: [
    new Box ({
      name: "shrubs",
      description: "Some dry sharp shrubs are sprouting from the cracked earth at the bed of the one-time stream.",
      emptyText: "They're picked clean of olives.",
      contents: [
        new Item ({
          name: "olives",
          checkText: "Small, dry olives.",
          description: "Small olives are sprouting from their branches at places. You might be able to get some",
          verbs: ["check", "get"],
        }),
      ],
      checkText: "Dry shrubs clinging to the desert ground.",
      verbs: ["check"],
    }),
  ],
});

module.exports = area;
