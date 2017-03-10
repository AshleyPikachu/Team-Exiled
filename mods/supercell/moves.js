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
        volatileStatus: "partiallytrapped",
        secondaries: [{
            chance: 30,
            status: 'par',
        }, {
            chance: 30,
            volatileStatus: 'confusion',
        }, ],
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
            onHit: function (pokemon, target, move) {
                // substitute moves
                function setMove(oldMove, moveid) {
                    let index = pokemon.moves.indexOf(oldMove);
                    if (index === -1) return;
                    let move = Tools.getMove(moveid);
                    let sketchedMove = {
                        move: move.name,
                        id: move.id,
                        pp: move.pp,
                        maxpp: move.pp,
                        target: move.target,
                        disabled: false,
                        used: false,
                    };
                    pokemon.moveset[index] = sketchedMove;
                    pokemon.moves[index] = toId(move.name);
                }
                let subs = [
                    ["defog", "seedflare"],
                    ["oblivionwing", "hurricane"],
                    ["roost", "earthpower"]
                ];
                if (pokemon.template.speciesid === 'lavahound' && pokemon.formeChange('Lava Pup')) {
                    subs.forEach(s => setMove(s[0], s[1]));
                    this.add('-formechange', pokemon, 'Lava Pup', '[msg]');
                }
                else if (pokemon.formeChange('Lava Pup')) {
                    subs.forEach(s => setMove(s[1], s[0]));
                    this.add('-formechange', pokemon, 'Lava Hound', '[msg]');
                }
                // make changing form available in consecutive turns
                delete pokemon.volatiles.stall;
            },
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
    "healspell": {
        id: "healspell",
        onHit: function (pokemon, source, move) {
            this.add('-activate', source, 'move: Heal Spell');
            let side = pokemon.side;
            for (let i = 0; i < side.pokemon.length; i++) {
                if (side.pokemon[i] !== source && ((side.pokemon[i].hasAbility('sapsipper')) ||
                        (side.pokemon[i].volatiles['substitute'] && !move.infiltrates))) {
                    continue;
                }
                side.pokemon[i].cureStatus();
            }
        },
        basePower: 0,
        accuracy: true,
        pp: 30,
        category: "Status",
        heal: [1, 1],
        self: {
            onHit: function (pokemon) {
                if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
                    this.add('-end', pokemon, 'Leech Seed', '[from] move: Heal Spell', '[of] ' + pokemon);
                }
                let sideConditions = {
                    spikes: 1,
                    toxicspikes: 1,
                    stealthrock: 1,
                    stickyweb: 1
                };
                for (let i in sideConditions) {
                    if (pokemon.hp && pokemon.side.removeSideCondition(i)) {
                        this.add('-sideend', pokemon.side, this.getEffect(i).name, '[from] move: Heal Spell', '[of] ' + pokemon);
                    }
                }
                if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
                    pokemon.removeVolatile('partiallytrapped');
                }
            },
        },
        secondary: false,
        priority: 1,
        flags: {
            snatch: 1,
            distance: 1
        },
        target: "allyTeam",
        type: "Fairy",
    },
};
