/**
 * Level 3 one-page words game data
 * Converted from Level-3-opw-game.csv
 */

const level3Data = {
  "Unit-1": [
    {
      pattern: "a_e",
      words: ["tape", "cape", "cane", "mane"]
    },
    {
      pattern: "ame, ake",
      words: ["game", "cake", "name", "lake"]
    },
    {
      pattern: "ate, ave",
      words: ["gate", "wave", "skate", "cave"]
    }
  ],
  "Unit-2": [
    {
      pattern: "i_e",
      words: ["kite", "pine", "ripe", "fine"]
    },
    {
      pattern: "ime, ike",
      words: ["lime", "bike", "time", "hike"]
    },
    {
      pattern: "ive, ine",
      words: ["five", "nine", "dive", "line"]
    }
  ],
  "Unit-3": [
    {
      pattern: "o_e",
      words: ["home", "bone", "cone", "rope"]
    },
    {
      pattern: "u_e",
      words: ["cuve", "mite", "cute", "mule"]
    },
    {
      pattern: "u_e",
      words: ["tube", "June", "tune", "rule"]
    }
  ],
  "Unit-4": [
    {
      pattern: "ai",
      words: ["rain", "nail", "tail", "wait"]
    },
    {
      pattern: "ay",
      words: ["bay", "day", "say", "pay"]
    },
    {
      pattern: "ai, ay",
      words: ["sail", "mail", "hay", "May"]
    }
  ],
  "Unit-5": [
    {
      pattern: "ee",
      words: ["bee", "feet", "seed", "jeep"]
    },
    {
      pattern: "ea",
      words: ["leaf", "eat", "sea", "meat"]
    },
    {
      pattern: "y, ey",
      words: ["candy", "key", "happy", "money"]
    }
  ],
  "Unit-6": [
    {
      pattern: "igh",
      words: ["light", "night", "high", "right"]
    },
    {
      pattern: "ie",
      words: ["pie", "tie", "lie", "die"]
    },
    {
      pattern: "y",
      words: ["spy", "sky", "cry", "my"]
    }
  ],
  "Unit-7": [
    {
      pattern: "oa",
      words: ["boat", "coat", "soap", "road"]
    },
    {
      pattern: "ow",
      words: ["bow", "row", "yellow", "pillow"]
    },
    {
      pattern: "oa, ow",
      words: ["goat", "toad", "elbow", "window"]
    }
  ],
  "Unit-8": [
    {
      pattern: "ue",
      words: ["blue", "glue", "blue", "Tuesday"]
    },
    {
      pattern: "ui, ew",
      words: ["fruit", "suit", "new", "dew"]
    },
    {
      pattern: "oo",
      words: ["moon", "zoo", "food", "boot"]
    }
  ]
};

// Export the data for use in other files if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = level3Data;
}

// If you're using this in browser without modules, the data is available as the global variable 'level3Data'
