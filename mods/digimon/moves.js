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
            chance: 10,
            boosts: {
                spa: -1,
                atk: -1
            }
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
    "infinityburn": {
        id: "infinityburn",
        name: "Infinity Burn",
        basePower: 488,
        accuracy: 100,
        pp: 5,
        target: "any",
        priority: 0,
        secondary: {
            volatileStatus: "flinch",
        },
        category: "Physical",
        flags: {
            protect: 1,
            mirror: 1
        },
        type: "Fire",
    },
    "meltdown": {
        id: "meltdown",
        name: "Meltdown",
        basePower: 400,
        accuracy: 100,
        pp: 5,
        target: "all",
        priority: 0,
        secondary: {
            volatileStatus: "flinch",
        },
        category: "Special",
        flags: {
            protect: 1,
            mirror: 1
        },
        type: "Fire",
    },
    "tremar": {
        id: "tremar",
        name: "Tremar",
        basePower: 178,
        accuracy: 100,
        pp: 10,
        target: "any",
        priority: 0,
        secondary: false,
        category: "Physical",
        flags: {
            protect: 1,
            mirror: 1
        },
        type: "Battle",
    },
    "musclecharge": {
        id: "musclecharge",
        name: "Muscle Charge",
        basePower: 0,
        accuracy: 100,
        pp: 10,
        boosts: {
            atk: 2,
            spa: 2
        },
        target: "self",
        priority: 0,
        secondary: false,
        category: "Status",
        flags: {},
        type: "Battle",
    },
    "warcry": {
        id: "warcry",
        name: "War Cry",
        basePower: 0,
        secondary: false,
        category: "Status",
        pp: 10,
        accuracy: 100,
        boosts: {
            atk: 1,
            def: 1,
            spa: 1,
            spd: 1,
            spe: 1
        },
        priority: 0,
        flags: {},
        target: "self",
        type: "Battle",
    },
    "sonicjab": {
        id: "sonicjab",
        name: "Sonic Jab",
        basePower: 52,
        category: "Physical",
        accuracy: 100,
        secondary: false,
        priority: 0,
        flags: {},
        pp: 15,
        target: "normal",
        type: "Battle",
    },
    "dynamitekick": {
        id: "dynamitekick",
        name: "Dynamite Kick",
        basePower: 193,
        accuracy: 100,
        pp: 5,
        category: "Special",
        volatileStatus: "flinch",
        secondary: false,
        priority: 0,
        flags: {},
        target: "normal",
        type: "Battle",
    },
    "counter": {
        id: "counter",
        name: "Counter",
        basePower: 285,
        volatileStatus: "confusion",
        category: "Physical",
        damageCallback: function (pokemon) {
			if (!pokemon.volatiles['counter']) return 0;
			return pokemon.volatiles['counter'].damage || 1;
		},
		category: "Physical",
		pp: 20,
		priority: -5,
		flags: {},
		beforeTurnCallback: function (pokemon) {
			pokemon.addVolatile('counter');
		},
		onTryHit: function (target, source, move) {
			if (!source.volatiles['counter']) return false;
			if (source.volatiles['counter'].position === null) return false;
		},
		effect: {
			duration: 1,
			noCopy: true,
			onStart: function (target, source, source2, move) {
				this.effectData.position = null;
				this.effectData.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget: function (target, source, source2) {
				if (source !== this.effectData.target) return;
				return source.side.foe.active[this.effectData.position];
			},
			onDamagePriority: -101,
			onDamage: function (damage, target, source, effect) {
				if (effect && effect.effectType === 'Move' && source.side !== target.side && this.getCategory(effect) === 'Physical') {
					this.effectData.position = source.position;
					this.effectData.damage = 2 * damage;
				}
			},
		},
		secondary: false,
		target: "normal",
		type: "Battle",
	},
	"megatonpunch": {
	    id: "megatonpunch",
	    name: "Megaton Punch",
	    basePower: 320,
	    category: "Physical",
	    accuracy: 100,
	    pp: 5,
	    volatileStatus: "flinch",
	    secondary: false,
	    flags: {},
	    priority: 0,
	    target: "normal",
	    type: "Battle",
	},
	"busterdrive": {
	    id: "busterdrive",
	    name: "Buster Drive",
	    basePower: 500,
	    volatileStatus: "confusion",
	    category: "Physical",
	    pp: 5,
	    accuracy: 100,
	    secondary: false,
	    flags: {},
	    priority: 0,
	    target: "allAdjacent",
	    type: "Battle",
	},
};
