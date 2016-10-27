'use strict';

exports.BattleMovedex = {
    "supahawtmixtape": {
        id: "supahawtmixtape",
        name: "SUPA HAWT MIXTAPE",
        pp: 5,
        priority: 1,
        category: "Special",
        basePower: 250,
        accuracy: true,
        secondary: {
            self: {
                boosts: {
                    spa: 2,
                    spe: 2,
                    evasion: 2,
                }
            }
        },
        target: "Normal",
        type: "Grass",
        flags: {
            protect: 1,
            mirror: 1
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Blue Flare", target);
        },
    },
    "flowergarden": {
        id: "flowergarden",
        name: "Flower Garden",
        pp: 10,
        priority: 1,
        category: "Special",
        basePower: 150,
        accuracy: true,
        secondary: {
            self: {
                boosts: {
                    spa: 1,
                    spe: 1,
                }
            }
        },
        target: "Normal",
        flags: {
            protect: 1,
            mirror: 1
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Blue Flare", target);
        },
        type: "Fire",
    },
    "badtime": {
        id: "badtime",
        name: "Bad Time",
        pp: 10,
        priority: 0,
        basePower: 100,
        accuracy: 100,
        secondary: {
            chance: 30,
            status: 'tox',
        },
        flags: {
            protect: 1,
            mirror: 1
        },
        target: "Normal",
        category: "Special",
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Sludge Wave", target);
            this.add('-anim', source, "Toxic", target);
            this.add('-anim', source, "Mean Look", target);
        },
        type: "Poison",
    },
    "passengermode": {
        id: "passengermode",
        name: "Passenger Mode",
        pp: 15,
        basePower: 90,
        category: "Special",
        priority: 0,
        accuracy: true,
        flags: {
            protect: 1,
            mirror: 1
        },
        secondary: {
            chance: 30,
            volatileStatus: 'flinch',
        },
        target: "normal",
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "U-Turn", target);
        },
        selfSwitch: true,
        type: "Fire",
    },
    "gamble": {
        id: "gamble",
        name: "Gamble",
        pp: 15,
        basePower: 60,
        basePowerCallback: function(pokemon, target, move) {
            if (!pokemon.volatiles.furycutter) {
                pokemon.addVolatile('furycutter');
            }
            return this.clampIntRange(move.basePower * pokemon.volatiles.furycutter.multiplier, 1, 250);
        },
        category: "Special",
        accuracy: 100,
        flags: {
            protect: 1,
            mirror: 1
        },
        target: "Normal",
        type: "Normal",
        onHit: function(target, source) {
            source.addVolatile('furycutter');
        },
        effect: {
            duration: 2,
            onStart: function() {
                this.effectData.multiplier = 1;
            },
            onRestart: function() {
                if (this.effectData.multiplier < 4) {
                    this.effectData.multiplier <<= 1;
                }
                this.effectData.duration = 2;
            },
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Glare", target);
        },
        secondary: false,
    },
    "error404": {
        id: "error404",
        name: "ERROR 404",
        pp: 15,
        self: {
            boosts: {
                atk: 2,
                def: 2,
                spa: 2,
                spd: 2,
                spe: 2,
                accuracy: 2,
                evasion: 2
            }
        },
        secondary: {
            status: "tox"
        },
        basePower: 80,
        accuracy: true,
        priority: 2,
        category: "Physical",
        ignoreImmunity: true,
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Swords Dance");
            this.add('-anim', source, "Iron Defense");
            this.add('-anim', source, "Nasty Plot");
            this.add('-anim', source, "Calm Mind");
            this.add('-anim', source, "Agility");
            this.add('-anim', source, "Hone Claws");
        },
        target: "normal",
        type: "Normal",
    },
    "murrinslash": {
        id: "murrinslash",
        name: "Murrin Slash",
        ohko: true,
        accuracy: true,
        target: "normal",
        type: "Dark",
        basePower: 0,
        priority: 0,
        secondary: false,
        category: "Special",
        pp: 20,
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Night Daze", target);
            this.add('-anim', source, "Slash", target);
        },
    },
    "shade": {
        id: "shade",
        name: "Shade",
        basePower: 130,
        accuracy: 90,
        priority: 0,
        secondary: false,
        category: "Special",
        pp: 5,
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Night Daze", target);
            this.add('-anim', source, "Night Shade", target);
            this.add('-anim', source, "Nightmare", target);
        },
        self: {
            boosts: {
                spa: -2
            }
        },
        target: "normal",
        type: "Dark",
    },
    "luckyprediction": {
        id: "luckyprediction",
        name: "Lucky Prediction",
        accuracy: true,
        basePower: 90,
        category: "Physical",
        pp: 20,
        priority: 1,
        flags: {
            snatch: 1,
            protect: 1,
            mirror: 1,
            contact: 1
        },
        isCrit: true,
        self: {
            volatileStatus: 'focusenergy',
            effect: {
                onStart: function(pokemon) {
                    this.add('-start', pokemon, 'move: Focus Energy');
                },
                onModifyCritRatio: function(critRatio) {
                    return critRatio + 2;
                },
            },
        },
        secondary: false,
        target: "normal",
        type: "Fairy",
    },
};
