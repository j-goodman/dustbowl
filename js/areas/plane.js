var Area = require('../area.js');
var Feature = require('../feature.js');
var Box = require('../box.js');
var Item = require('../item.js');
var Exit = require('../exit.js');

area = new Area ({
  description: "You're huddled in what looks like the inside of a large metal pipe.",
  name: 'plane',
  worldMap: this,
  onExit: function () {
    var door;
    door = this.getNoun('door');
    door.description = "It's completely dark except for a shaft of light coming in through a door above you.";
    door.checkText = "You can see the pale desert sky through the square hatch of the door.";
  },
  contents: [
    new Feature ({
      name: "sand",
      description: "The ground underneath you is warm sand.",
      checkText: "If you dig a few inches into the course sand beneath you you feel hard metal.",
      verbs: ["check"],
    }),
    new Exit ({
      name: "door",
      description: "It's completely dark except for a shaft of light coming in through a door above you. The light hurts your eyes when you look at it.",
      checkText: "Beyond the square hatch of the door you can only see blinding whiteness.",
      destinationName: 'crashsite',
      verbs: ["check", "go to"],
    }),
    new Feature ({
      name: "extra",
      description: '<br><br>You can input commands in the format of "<v>verb</v> <n>noun</n>". For instance, "check sand," or "go to door."',
      checkText: "",
      verbs: [],
    }),
  ],
});

module.exports = area;
