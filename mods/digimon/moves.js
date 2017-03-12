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
	    target: "any",
	    type: "Battle",
	},
	"thunderjustice": {
	    id: "thunderjustice",
	    name: "Thunder Justice",
	    basePower: 586,
	    accuracy: true,
	    pp: 5,
	    category: "Special",
	    priority: 0,
	    secondary: false,
	    flags: {},
	    volatileStatus: "flinch",
	    type: "Air",
	    target: "any",
	},
	"spinningshot": {
	    id: "spinningshot",
	    name: "Spinning Shot",
	    basePower: 389,
	    pp: 10,
	    accuracy: 100,
	    secondary: false,
	    priority: 0,
	    flags: {},
	    category: "Special",
	    type: "Air",
	    target: "allAdjacentFoes",
	},
	"electriccloud": {
	    id: "electriccloud",
	    name: "Electric Cloud",
	    basePower: 120,
	    category: "Special",
	    volatileStatus: "flinch",
	    accuracy: true,
	    flags: {},
	    secondary: false,
	    priority: 0,
	    pp: 20,
	    type: "Air",
	    target: "allAdjacentFoes",
	},
	"megalospark": {
	    id: "megalospark",
	    name: "Megalo Spark",
	    basePower: 382,
	    volatileStatus: "flinch",
	    accuracy: 100,
	    pp: 10,
	    secondary: false,
	    priority: 0,
	    flags: {},
	    category: "Physical",
	    target: "allAdjacentFoes",
	    type: "Air",
	},
	"staticelect": {
	    id: "staticelect",
	    name: "Static Elect",
	    basePower: 85,
	    accuracy: 100,
	    pp: 40,
	    secondary: false,
	    volatileStatus: "flinch",
	    priority: 0,
	    flags: {},
	    category: "Physical",
	    target: "normal",
	    type: "Air",
	},
	"windcutter": {
	    id: "windcutter",
	    name: "Wind Cutter",
	    basePower: 178,
	    accuracy: 100,
	    category: "Special",
	    secondary: false,
	    priority: 0,
	    flags: {},
	    pp: 15,
	    target: "any",
	    type: "Air",
	},
	"confusedstorm": {
	    id: "confusedstorm",
	    name: "Confused Storm",
	    basePower: 225,
	    volatileStatus: "confusion",
	    accuracy: 100,
	    category: "Special",
	    secondary: false,
	    priority: 0,
	    flags: {},
	    pp: 10,
	    target: "allPokemon",
	    type: "Air",
	},
	"hurricane": {
	    id: "hurricane",
	    name: "Hurricane",
	    basePower: 366,
	    volatileStatus: "confusion",
	    category: "Special",
	    pp: 10,
	    accuracy: 100,
	    secondary: false,
	    priority: 0,
	    flags: {},
	    target: "allPokemon",
	    type: "Air",
	},
	"poisonpowder": {
	    id: "poisonpowder",
	    name: "Poison Powder",
	    basePower: 117,
	    pp: 15,
	    category: "Special",
	    status: "psn",
	    accuracy: 100,
	    secondary: false,
	    priority: 0,
	    flags: {},
	    target: "allPokemon",
	    type: "Earth",
	},
	"bug": {
	    id: "bug",
	    name: "Bug",
	    basePower: 500,
	    accuracy: 100,
	    boosts: {
	        atk: -3,
	        spa: -3
	    },
	    category: "Physical",
	    pp: 5,
	    secondary: false,
	    priority: 0,
	    flags: {},
	    target: "any",
	    type: "Earth",
	},
	"massmorph": {
	    id: "massmorph",
	    name: "Mass Morph",
	    basePower: 0,
	    category: "Status",
	    boosts: {
	        atk: 1,
	        def: 2,
	        spa: 1,
	        spd: 1,
	        spe: 1,
	        accuracy: 1
	    },
	    accuracy: 100,
	    pp: 30,
	    priority: 0,
	    secondary: false,
	    flags: {},
	    target: "self",
	    type: "Earth",
	},
	"insectplague": {
	    id: "insectplague",
	    name: "Insect Plague",
	    basePower: 180,
	    accuracy: 100,
	    category: "Special",
	    pp: 10,
	    secondary: false,
	    priority: 0,
	    flags: {},
	    status: "psn",
	    target: "any",
	    type: "Earth",
	},
	"charmperfume": {
	    id: "charmperfume",
	    name: "Charm Perfume",
	    basePower: 180,
	    status: "psn",
	    category: "Special",
	    pp: 15,
	    accuracy: 100,
	    secondary: false,
	    priority: 0,
	    flags: {},
	    target: "allPokemon",
	    type: "Earth",
	},
	"poisonclaw": {
	    basePower: 62,
	    category: "Physical",
	    status: "psn",
	    pp: 40,
	    secondary: false,
	    accuracy: 100,
	    priority: 0,
	    flags: {},
	    target: "normal",
	    type: "Earth",
	},
	"dangersting": {
	    basePower: 157,
	    accuracy: 100,
	    category: "Physical",
	    pp: 15,
	    boosts: {
	        atk: -3,
	        spa: -3
	    },
	    secondary: false,
	    priority: 0,
	    flags: {},
	    target: "normal",
	    type: "Earth",
	},
	"greentrap": {
	    id: "greentrap",
	    name: "Green Trap",
	    basePower: 310,
	    accuracy: 100,
	    pp: 10,
	    volatileStatus: "flinch",
	    category: "Physical",
	    flags: {},
	    secondary: false,
	    priority: 0,
	    target: "any",
	    type: "Earth",
	},
	"gigafreeze": {
        id: "gigafreeze",
        name: "Giga Freeze",
        basePower: 264,
        category: "Physical",
        pp: 10,
        volatileStatus: "flinch",
        accuracy: 100,
        flags: {},
        secondary: false,
        priority: 0,
        target: "allAdjacentFoes",
        type: "Ice",
    },
    "icestatue": {
        id: "icestatue",
        name: "Ice Statue",
        basePower: 424,
        accuracy: 100,
        pp: 10,
        volatileStatus: "flinch",
        category: "Physical",
        flags: {},
        secondary: false,
        priority: 0,
        target: "any",
        type: "Ice",
    },
    "winterblast": {
        id: "winterblast",
        name: "Winter Blast",
        basePower: 120,
        accuracy: 100,
        volatileStatus: "flinch",
        category: "Special",
        pp: 10,
        secondary: false,
        priority: 0,
        flags: {},
        target: "allPokemon",
        type: "Ice",
    },
    "iceneedle": {
        id: "iceneedle",
        name: "Ice Needle",
        accuracy: 100,
        basePower: 126,
        volatileStatus: "flinch",
        category: "Physical",
        pp: 20,
        flags: {},
        priority: 0,
        secondary: false,
        target: "any",
        type: "Ice",
    },
    "waterblit": {
        id: "waterblit",
        name: "Water Blit",
        basePower: 211,
        accuracy: 100,
        category: "Special",
        pp: 20,
        secondary: false,
        priority: 0,
        flags: {},
        target: "normal",
        type: "Ice",
    },
    "aquamagic": {
        id: "aquamagic",
        name: "Aqua Magic",
        basePower: 0,
        accuracy: 100,
        boosts: {
            atk: 1,
            def: 1,
            spa: 1,
            spd: 1,
            spe: 1,
            accuracy: 1
        },
        pp: 20,
        secondary: false,
        priority: 0,
        flags: {},
        target: "self",
        type: "Ice",
    },
    "aurorafreeze": {
        id: "aurorafreeze",
        name: "Aurora Freeze",
        basePower: 430,
        accuracy: 100,
        category: "Special",
        boosts: {
            atk: -3,
            spa: -3
        },
        pp: 10,
        onTry: function (attacker, defender, move) {
            if (attacker.removeVolatile(move.id)) {
                return;
            }
            this.add('-prepare', attacker, move.name, defender);
            if (!this.runEvent('ChargeMove', attacker, defender, move)) {
                this.add('-anim', attacker, move.name, defender);
                return;
            }
            attacker.addVolatile('twoturnmove', defender);
            return null;
        },
        secondary: false,
        priority: 0,
        flags: {
            charge: 1,
            distance: 1
        },
        target: "allPokemon",
        type: "Ice",
    },
    "teardrop": {
        id: "teardrop",
        name: "Tear Drop",
        basePower: 60,
        accuracy: 90,
        boosts: {
            atk: -3,
            spa: -3
        },
        pp: 40,
        category: "Special",
        secondary: false,
        priority: 0,
        flags: {
            protect: 1,
            distance: 1
        },
        target: "any",
        type: "Ice",
    },
    "powercrane": {
        id: "powercrane",
        name: "Power Crane",
        basePower: 226,
        accuracy: 100,
        secondary: false,
        category: "Physical",
        pp: 15,
        priority: 0,
        flags: {
            protect: 1,
            distance: 1
        },
        target: "any",
        type: "Mech",
    },
    "allrangebeam": {
        id: "allrangebeam",
        name: "All-Range Beam",
        basePower: 573,
        pp: 5,
        accuracy: 100,
        category: "Special",
        priority: 0,
        secondary: false,
        flags: {
            protect: 1,
            distance: 1
        },
        target: "allPokemon",
        type: "Mech",
    },
    "metalsprinter": {
        id: "metalsprinter",
        name: "Metal Sprinter",
        basePower: 150,
        accuracy: 100,
        category: "Physical",
        secondary: false,
        pp: 10,
        flags: {
            protect: 1,
            distance: 1
        },
        priority: 0,
        target: "allPokemon",
        type: "Mech",
    },
    "pulselazer": {
        id: "pulselazer",
        name: "Pulse Lazer",
        basePower: 389,
        accuracy: 100,
        category: "Special",
        pp: 10,
        secondary: false,
        flags: {
            protect: 1,
            distance: 1
        },
        priority: 0,
        target: "any",
        type: "Mech",
    },
    "pulselazer": {
        id: "pulselazer",
        name: "Pulse Lazer",
        basePower: 389,
        accuracy: 100,
        category: "Special",
        pp: 10,
        secondary: false,
        flags: {
            protect: 1,
            distance: 1
        },
        priority: 0,
        target: "any",
        type: "Mech",
    },
    "deleteprogram": {
        id: "deleteprogram",
        name: "Delete Program",
        basePower: 430,
        accuracy: 100,
        category: "Special",
        pp: 10,
        secondary: false,
        flags: {
            protect: 1,
            distance: 1
        },
        boosts: {
            atk: -3,
            spa: -3
        },
        priority: 0,
        target: "any",
        type: "Mech",
    },
    "dgdimension": {
        id: "dgdimension",
        name: "DG Dimension",
        basePower: 722,
        category: "Special",
        pp: 5,
        accuracy: 100,
        secondary: false,
        flags: {
            protect: 1,
            distance: 1
        },
        priority: 0,
        target: "any",
        type: "Mech",
    },
    "fullpotential": {
        id: "fullpotential",
        name: "Full Potential",
        basePower: 0,
        accuracy: 100,
        category: "Status",
        pp: 20,
        boosts: {
            atk: 2,
            def: 2,
            spa: 2,
            spd: 2,
            spe: 2
        },
        secondary: false,
        flags: {},
        priority: 0,
        target: "self",
        type: "Mech",
    },
    "reverseprogram": {
        id: "reverseprogram",
        name: "Reverse Program",
        basePower: 256,
        accuracy: 100,
        category: "Special",
        pp: 5,
        secondary: false,
        flags: {
            protect: 1,
            distance: 1
        },
        boosts: {
            atk: -3,
            spa: -3
        },
        priority: 0,
        target: "any",
        type: "Mech",
    },
    "orderspray": {
        id: "orderspray",
        name: "Order Spray",
        basePower: 88,
        category: "Special",
        pp: 40,
        volatileStatus: "flinch",
        accuracy: 100,
        secondary: false,
        flags: {
            protect: 1,
            distance: 1
        },
        priority: 0,
        target: "any",
        type: "Filth",
    },
    "poopspdtoss": {
        id: "poopspdtoss",
        name: "Poop Spd Toss",
        basePower: 122,
        category: "Physical",
        pp: 20,
        status: "psn",
        accuracy: 100,
        secondary: false,
        flags: {
            protect: 1,
            distance: 1
        },
        priority: 0,
        target: "any",
        type: "Filth",
    },
    "bigpooptoss": {
        id: "Poop Spd Toss",
        name: "Poop Spd Toss",
        basePower: 211,
        category: "Physical",
        pp: 15,
        volatileStatus: "confusion",
        accuracy: 100,
        secondary: false,
        flags: {
            protect: 1,
            distance: 1
        },
        priority: 0,
        target: "any",
        type: "Filth",
    },
    "bigrndtoss": {
        id: "bigrndtoss",
        name: "Big Rnd Toss",
        basePower: 211,
        category: "Physical",
        pp: 5,
        volatileStatus: "confusion",
        accuracy: 100,
        secondary: false,
        flags: {
            protect: 1,
            distance: 1
        },
        priority: 0,
        target: "allAdjacentFoes",
        type: "Filth",
    },
    "pooprndtoss": {
        id: "pooprndtoss",
        name: "Poop RND Toss",
        basePower: 75,
        category: "Physical",
        pp: 15,
        status: "psn",
        accuracy: 100,
        secondary: false,
        flags: {
            protect: 1,
            distance: 1
        },
        priority: 0,
        target: "allPokemon",
        type: "Filth",
    },
    "rndspdtoss": {
        id: "rndspdtoss",
        name: "Rnd Spd Toss",
        basePower: 122,
        category: "Physical",
        pp: 10,
        status: "psn",
        accuracy: 100,
        secondary: false,
        flags: {
            protect: 1,
            distance: 1
        },
        priority: 0,
        target: "any",
        type: "Filth",
    },
    "horizontalkick": {
        id: "horizontalkick",
        name: "Horizontal Kick",
        basePower: 53,
        category: "Special",
        pp: 5,
        accuracy: 100,
        secondary: false,
        flags: {
            protect: 1
        },
        priority: 0,
        target: "normal",
        type: "Filth",
    },
    "ultpoophell": {
        id: "ultpoophell",
        name: "Ult Poop Hell",
        basePower: 333,
        category: "Physical",
        pp: 5,
        accuracy: 100,
        secondary: false,
        flags: {
            protect: 1,
            distance: 1
        },
        boosts: {
            atk: -3,
            spd: -3
        },
        priority: 0,
        target: "allPokemon",
        type: "Filth",
    },
//Health Items
	//Small Recovery
	smallrecovery: {
		accuracy: true,
		category: "Status",
		id: "smallrecovery",
		isNonstandard: true,
		name: "Small Recovery",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 4],
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},
	},
	//Medium Recovery
	mediumrecovery: {
		accuracy: true,
		category: "Status",
		id: "mediumrecovery",
		isNonstandard: true,
		name: "Medium Recovery",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 10],
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},

	},
	//Large Recovery
	largerecovery: {
		accuracy: true,
		category: "Status",
		id: "largerecovery",
		isNonstandard: true,
		name: "Large Recovery",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 10],
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},

	},
	//Super Recovery Floppy
	superrecoveryfloppy: {
		accuracy: true,
		category: "Status",
		id: "superrecoveryfloppy",
		isNonstandard: true,
		name: "Super Recovery Floppy",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 10],
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},

	},
	//MP Floppy
	mpfloppy: {
		accuracy: true,
		category: "Status",
		id: "mpfloppy",
		isNonstandard: true,
		name: "MP Floppy",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 10],
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},

	},
	//Medium MP Floppy
	mediummpfloppy: {
		accuracy: true,
		category: "Status",
		id: "mediummpfloppy",
		isNonstandard: true,
		name: "Medium MP Floppy",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 10],
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},

	},
	//Large MP Floppy
	largempfloppy: {
		accuracy: true,
		category: "Status",
		id: "largempfloppy",
		isNonstandard: true,
		name: "Large MP Floppy",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 10],
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},

	},
	//Various
	various: {
		accuracy: true,
		category: "Status",
		id: "various",
		isNonstandard: true,
		name: "Various",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 10],
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},

	},
	//Protection
	protection: {
		accuracy: true,
		category: "Status",
		id: "protection",
		isNonstandard: true,
		name: "Protection",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 10],
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},

	},
	//Omnipotent
	omnipotent: {
		accuracy: true,
		category: "Status",
		id: "onmipotent",
		isNonstandard: true,
		name: "Omnipotent",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 10],
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},

	},
	//Double Floppy
	doublefloppy: {
		accuracy: true,
		category: "Status",
		id: "doublefloppy",
		isNonstandard: true,
		name: "Double Floppy",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 10],
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},

	},
	//Restore Floppy
	restorefloppy: {
		accuracy: true,
		category: "Status",
		id: "restorefloppy",
		isNonstandard: true,
		name: "Restore Floppy",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 10],
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},

	},
	//Super Restore Floppy
	superrestorefloppy: {
		accuracy: true,
		category: "Status",
		id: "superrestorefloppy",
		isNonstandard: true,
		name: "Super Restore Floppy",
		pp: 0.625,
		priority: 0,
		flags: {
			heal: 1,
			snatch: 1,
		},
		secondary: false,
		heal: [1, 10],
		target: "self",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
		},

	},
//Stat Boosting Items
	//Offense Disk 
	offensedisk: {
		accuracy: true,
		category: "Status",
		id: "offensedisk",
		isNonstandard: true,
		name: "Offense Disk",
		pp: 0.625,
		priority: 0,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sandstorm", target);
		},
		weather: 'Sandstorm',
		secondary: false,
		target: "self",
	},
	//Defense Disk
	defensedisk: {
		accuracy: true,
		category: "Status",
		id: "defensedisk",
		isNonstandard: true,
		name: "Defense Disk",
		pp: 0.625,
		priority: 0,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hail", target);
		},
		weather: 'Hail',
		secondary: false,
		target: "self",
	},
	//Hi Speed Disk
	hispeeddisk: {
		accuracy: 30,
		category: "Physical",
		basePower: 10000,
		id: "hispeeddisk",
		isNonstandard: true,
		name: "Hi Speed Disk",
		pp: 0.625,
		priority: 0,
		flags: {
			protect: 1,
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Water Spout", target);
		},
		ignoreImmunity: true,
		secondary: false,
		target: "self",
	},
	//Super Defense Disk
	superdefensedisk: {
		accuracy: true,
		category: "Status",
		id: "superdefensedisk",
		isNonstandard: true,
		name: "Super Defense Disk",
		pp: 0.625,
		priority: -6,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Defog", target);
		},
		forceSwitch: true,
		ignoreImmunity: true,
		secondary: false,
		target: "self",
	},
	//Super Offense Disk
	superoffensedisk: {
		accuracy: true,
		category: "Status",
		id: "superoffensedisk",
		isNonstandard: true,
		name: "Super Offense Disk",
		pp: 0.625,
		priority: 1,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Teleport", target);
		},
		selfSwitch: 'copyvolatile',
		ignoreImmunity: true,
		secondary: false,
		target: "self",
	},
	//Super Speed Disk
	superspeeddisk: {
		accuracy: 100,
		category: "Special",
		basePower: 15,
		id: "superspeedisk",
		isNonstandard: true,
		name: "Super Speed Disk",
		pp: 0.625,
		priority: 0,
		flags: {
			protect: 1,
			gravity: 1,
		},
		multihit: [5, 10],
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Pin Missle", target);
		},
		secondary: false,
		target: "self",
	},
	//Omnipotent Disk
	omnipotentdisk: {
		accuracy: 100,
		category: "Special",
		basePower: 25,
		id: "omnipotentdisk",
		isNonstandard: true,
		name: "Omnipotent Disk",
		pp: 0.625,
		priority: 0,
		flags: {
			protect: 1,
			gravity: 1,
		},
		multihit: [4, 7],
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Flash Cannon", target);
		},
		secondary: false,
		target: "self",
	},
};
