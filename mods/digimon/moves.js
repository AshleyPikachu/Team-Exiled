'use strict';

exports.BattleMovedex = {
    "bubble": {
        id: "bubble",
        name: "Bubble",
        basePower: 6,
        category: "Special",
        secondary: false,
        priority: 0,
        target: "any",
        pp: 40,
        flags: {},
        accuracy: 100,
        type: "Ice",
    },
    "firetower": {
        id: "firetower",
        name: "Fire Tower",
        basePower: 155,
        category: "Physical",
        secondary: {
            chance: 25,
            volatileStatus: "flinch"
        },
        priority: 0,
        target: "any",
        pp: 20,
        flags: {
            protect: 1
        },
        accuracy: 100,
        type: "Fire",
    },
};
