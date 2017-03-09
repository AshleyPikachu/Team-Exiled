'use strict';

exports.BattleMovedex = {
    "battleram": {
        basePower: 120,
        //add Substitute
        self: {
            volatileStatus: 'Substitute',
        },
        accuracy: 100,
        priority: 0,
        pp: 10,
        //lock user into the move
        secondary: {
            self: {
                volatileStatus: 'lockedmove',
            }
        },
        category: "Physical",
        flags: {
            protect: 1,
            contact: 1
        },
        target: "normal",
        type: "Normal",
    },
    "arrowsiege": {
        id: "arrowsiege",
        name: "Arrow Siege",
        basePower: 80,
        priority: 1,
        pp: 15,
        self: {
            boosts: {
                spa: 1,
                spe: 1
            },
        },
        accuracy: true,
        secondary: false,
        category: "Special",
        flags: {
            protect: 1,
            distance: 1
        },
        target: "any",
        type: "Normal",
    },
    "rebound": {
        id: "rebound",
        name: "Rebound",
        basePower: 90,
        drain: [1, 2],
        accuracy: 100,
        pp: 15,
        category: "Physical",
        flags: {
            protect: 1,
            contact: 1
        },
        secondary: false,
        priority: 0,
        self: {
            //remove hazards on own side
            onHit: function (pokemon) {
                if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
                    this.add('-end', pokemon, 'Leech Seed', '[from] move: Rebound', '[of] ' + pokemon);
                }
                let sideConditions = {
                    spikes: 1,
                    toxicspikes: 1,
                    stealthrock: 1,
                    stickyweb: 1
                };
                for (let i in sideConditions) {
                    if (pokemon.hp && pokemon.side.removeSideCondition(i)) {
                        this.add('-sideend', pokemon.side, this.getEffect(i).name, '[from] move: Rebound', '[of] ' + pokemon);
                    }
                }
                if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
                    pokemon.removeVolatile('partiallytrapped');
                }
            },
        },
        target: "normal",
        type: "Fighting",
    },
    "greed": {
        id: "greed",
        name: "Greed",
        basePower: 90,
        onHit: function (target, source) {
			if (source.item || source.volatiles['gem']) {
				return;
			}
			let yourItem = target.takeItem(source);
			if (!yourItem) {
				return;
			}
			if (!source.setItem(yourItem)) {
				target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
				return;
			}
			this.add('-item', source, yourItem, '[from] move: Greed', '[of] ' + target);
		},
		self: {
		    boosts: {
		        atk: 3,
		        spe: 3
		    },
		    statusVolatile: "confusion",
		},
        accuracy: 100,
        category: "Physical",
        pp: 10,
        flags: {
            protect: 1,
            distance: 1,
            contact: 1
        },
        secondary: false,
        priority: 0,
        target: "any",
        type: "Bug",
    },
    "fireball": {
        id: "fireball",
        name: "Fireball",
        basePower: 110,
        accuracy: 100,
        category: "Special",
        pp: 10,
        flags: {
            protect: 1,
            distance: 1
        },
        //add Fire type effectiveness
        onEffectiveness: function (typeMod, type) {
            if (type === 'Fire') return 1;
        },
        secondary: {
            chance: 30,
            status: "brn"
        },
        priority: 0,
        target: "any",
        type: "Psychic",
    },
    "airstrike": {
        id: "airstrike",
        name: "Air Strike",
        basePower: 90,
        accuracy: 100,
        category: "Physical",
        pp: 15,
        flags: {
            protect: 1
        },
        self: {
            heal: [1, 2]
        },
        secondary: {
            self: {
                //remove hazards
                onHit: function (pokemon) {
                    if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
                        this.add('-end', pokemon, 'Leech Seed', '[from] move: Air Strike', '[of] ' + pokemon);
                    }
                    let sideConditions = {
                        spikes: 1,
                        toxicspikes: 1,
                        stealthrock: 1,
                        stickyweb: 1
                    };
                    for (let i in sideConditions) {
                        if (pokemon.hp && pokemon.side.removeSideCondition(i)) {
                            this.add('-sideend', pokemon.side, this.getEffect(i).name, '[from] move: Air Strike', '[of] ' + pokemon);
                        }
                    }
                    if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
                        pokemon.removeVolatile('partiallytrapped');
                    }
                },
            }
        },
        priority: 0,
        target: "normal",
        type: "Flying",
    },
    "evilbiding": {
        id: "evilbiding",
        name: "Evil Biding",
        basePower: 90,
        accuracy: 100,
        category: "Special",
        pp: 10,
        flags: {
            protect: 1
        },
        secondary: false,
        self: {
            boosts: {
                spe: 1
            }
        },
        priority: 0,
        target: "normal",
        type: "Dark",
    },
    "hammerslammer": {
        id: "hammerslammer",
        name: "Hammer Slammer",
        basePower: 130,
        drain: [1, 3],
        accuracy: 90,
        pp: 10,
        priority: 0,
        secondary: false,
        category: "Physical",
        flags: {
            protect: 1,
            contact: 1
        },
        ignoreImmunity: true,
        target: "any",
        type: "Ground",
    },
    "raisethedead": {
        id: "raisethedead",
        name: "Raise the Dead",
        basePower: 120,
        accuracy: 90,
        pp: 10,
        priority: 0,
        category: "Special",
        flags: {
            protect: 1,
            distance: 1
        },
        boosts: {
            def: -1,
            spd: -1,
            spe: -1
        },
        secondary: {
            volatileStatus: "partiallytrapped"
        },
        status: "par",
        volatileStatus: "confusion",
        target: "any",
        type: "Ghost",
    },
    "combustion": {
        isNonstandard: true,
        accuracy: 100,
        category: "Special",
        id: "combustion",
        isViable: true,
        name: "Combustion",
        pp: 10,
        priority: 0,
        basePower: 110,
        self: {
            heal: [1, 2],
        },
        flags: {
            protect: 1,
            distance: 1
        },
        target: "any",
        type: "Fire",
    },
    "metallicsword": {
        id: "metallicsword",
        name: "Metallic Sword",
        basePower: 120,
        accuracy: 90,
        category: "Physical",
        pp: 10,
        priority: 0,
        drain: [1, 3],
        flags: {
            protect: 1,
            contact: 1
        },
        secondary: false,
        target: "normal",
        type: "Steel",
    },
};
