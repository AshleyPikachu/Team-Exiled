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
    "prominencebeam": {
        id: "prominencebeam",
        name: "Prominence Beam",
        basePower: 444,
        category: "Special",
        secondary: {
            self: {
                chance: 20,
                boosts: {
                    spa: -2,
                    atk: -2
                }
            },
        },
        priority: 0,
        target: "any",
        pp: 5,
        flags: {
            protect: 1
        },
        accuracy: 100,
        type: "Fire",
    },
    "spitfire": {
        id: "spitfire",
        name: "Spit Fire",
        basePower: 66,
        category: "Special",
        secondary: false,
        priority: 0,
        target: "any",
        pp: 25,
        flags: {
            protect: 1
        },
        accuracy: 100,
        type: "Fire",
    },
    "redinferno": {
        id: "redinferno",
        name: "Red Inferno",
        basePower: 210,
        category: "Special",
        secondary: false,
        priority: 0,
        target: "any",
        pp: 15,
        flags: {
            protect: 1
        },
        accuracy: 100,
        type: "Fire",
    },
    "magmabomb": {
        id: "magmabomb",
        name: "Magma Bomb",
        basePower: 279,
        category: "Physical",
        secondary: {
            chance: 25,
            volatileStatus: "confusion"
        },
        priority: 0,
        target: "any",
        pp: 15,
        flags: {
            protect: 1
        },
        accuracy: 100,
        type: "Fire",
    },
    "heatlaser": {
        id: "heatlaser",
        name: "Heat Laser",
        basePower: 84,
        category: "Special",
        secondary: {
            self: {
                chance: 10,
                boosts: {
                    spa: -1,
                    atk: -1
                }
            },
        },
        priority: 0,
        target: "any",
        pp: 30,
        flags: {
            protect: 1
        },
        accuracy: 100,
        type: "Fire",
    },
};
