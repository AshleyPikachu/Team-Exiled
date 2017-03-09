'use strict';

exports.BattlePokedex = {
    barbarian: {
        species: "Barbarian",
        num: -200,
        types: ['Normal'],
        baseStats: {
            hp: 80,
            atk: 110,
            def: 80,
            spa: 50,
            spd: 80,
            spe: 90
        },
        abilities: {
            0: "Adaptability"
        },
        heightm: 1.2,
        weightkg: 38,
    },
    archer: {
        species: "Archer",
        num: -201,
        types: ['Normal'],
        baseStats: {
            hp: 50,
            atk: 40,
            def: 50,
            spa: 105,
            spd: 50,
            spe: 110
        },
        abilities: {
            0: "Sharpshooter"
        },
        heightm: 1.2,
        weightkg: 6.3,
    },
    goblin: {
        species: "Goblin",
        num: -202,
        types: ['Bug'],
        baseStats: {
            hp: 40,
            atk: 80,
            def: 20,
            spa: 40,
            spd: 20,
            spe: 145
        },
        abilities: {
            0: "Theft"
        },
        heightm: 0.6,
        weightkg: 4.2,
    },
    regulargiant: {
        species: "Regular Giant",
        num: -203,
        types: ['Fighting'],
        baseStats: {
            hp: 125,
            atk: 80,
            def: 80,
            spa: 40,
            spd: 80,
            spe: 5
        },
        abilities: {
            0: "Meatshield"
        },
        heightm: 5.7,
        weightkg: 120.0,
    },
    wizard: {
        species: "Wizard",
        num: -204,
        types: ['Psychic'],
        baseStats: {
            hp: 70,
            atk: 40,
            def: 60,
            spa: 125,
            spd: 100,
            spe: 135
        },
        abilities: {
            0: "Wizardry"
        },
        heightm: 1.6,
        weightkg: 6.4,
    },
    balloon: {
        species: "Balloon",
        num: -205,
        types: ['Dark', 'Flying'],
        baseStats: {
            hp: 115,
            atk: 90,
            def: 80,
            spa: 60,
            spd: 80,
            spe: 25
        },
        abilities: {
            0: "I Gotz a Bomb"
        },
        heightm: 4.8,
        weightkg: 0.8,
    },
    minion: {
        species: "Minion",
        num: -206,
        types: ['Dark', 'Flying'],
        baseStats: {
            hp: 50,
            atk: 40,
            def: 50,
            spa: 105,
            spd: 50,
            spe: 145
        },
        abilities: {
            0: "Mayhem"
        },
        heightm: 0.8,
        weightkg: 1.2,
    },
    hogrider: {
        species: "Hog Rider",
        num: -207,
        types: ['Ground', 'Fighting'],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 80,
            spa: 40,
            spd: 60,
            spe: 130
        },
        abilities: {
            0: "HOG RIDDAH"
        },
        heightm: 3.7,
        weightkg: 32.6,
    },
    witch: {
        species: "Witch",
        num: -208,
        types: ['Ghost', 'Psychic'],
        baseStats: {
            hp: 105,
            atk: 40,
            def: 60,
            spa: 70,
            spd: 110,
            spe: 45
        },
        abilities: {
            0: "Witchcraft"
        },
        heightm: 2.2,
        weightkg: 8.7,
    },
    lavahound: {
        num: -209,
        species: "Lava Hound",
        types: ["Fire", "Flying"],
        baseStats: {
            hp: 95,
            atk: 70,
            def: 95,
            spa: 80,
            spd: 95,
            spe: 40
        },
        abilities: {
            0: "Burnout"
        },
        heightm: 4.8,
        weightkg: 46.8,
    },
    lavapup: {
        num: -209,
        species: "Lava Pup",
        types: ["Fire", "Flying"],
        baseStats: {
            hp: 25,
            atk: 30,
            def: 20,
            spa: 60,
            spd: 20,
            spe: 105
        },
        abilities: {
            0: "Burnout"
        },
        heightm: 0.2,
        weightkg: 0.1,
    },
    pekka: {
        num: -210,
        species: "PEKKA",
        types: ["Steel", "Dark"],
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 40,
            spd: 60,
            spe: 5
        },
        abilities: {
            0: "Masked Warrior"
        },
        heightm: 6.7,
        weightkg: 253.8,
    },
};
