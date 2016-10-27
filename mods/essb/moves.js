'use strict';

exports.BattleMovedex = {
    //returningavenger
    "aquasubscribe": {
        id: "aquasubscribe",
        name: "Aqua Subscribe",
        priority: 1,
        self: {
            boosts: {
                spa: 1,
                spe: 1
            }
        },
        flags: {
            protect: 1,
            mirror: 1
        },
        secondary: false,
        category: "Special",
        onHit: function(target, source, move) {
            this.add('c|~ReturningAvenger|Subscribe to http://youtube.com/DeathlyPlays');
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Hydro Pump", target);
        },
        basePower: 90,
        pp: 15,
        accuracy: 100,
        target: "normal",
        type: "Water",
    },
    //cieltsnow
    "pimpslap": {
        id: "pimpslap",
        name: "Pimp Slap",
        basePower: 90,
        accuracy: 100,
        pp: 15,
        priority: 1,
        self: {
            boosts: {
                spa: 1,
                spe: 1
            }
        },
        secondary: false,
        category: "Special",
        onHit: function(target, source, move) {
            this.add('c|+CielTSnow|Who\'s getting slapped next!?!?!');
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Focus Blast", target);
        },
    },
    //catequil
    "fuckingsplashing": {
        id: "fuckingsplashing",
        name: "FUCKING SPLASHING",
        self: {
            boosts: {
                atk: 2,
                spe: 2,
                def: 2,
                spd: 2,
                accuracy: 2
            }
        },
        basePower: 120,
        accuracy: 100,
        pp: 15,
        priority: 0,
        secondary: false,
        category: "Physical",
        onHit: function(target, source, move) {
            this.add('c|~CateQuil|SPLASH');
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Splash", target);
        },
        type: "Water",
        target: "normal",
    },
    //vividisagod
    "jetblast": {
        id: "jetblast",
        name: "Jet Blast",
        pp: 5,
        priority: 0,
        basePower: 140,
        category: "Special",
        accuracy: 100,
        onHit: function(target, source, move) {
            this.add('c|&Vivid is a God|JET FUMES DON\'T MELT STEEL BEAMS!!!!!!');
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Draco Meteor", target);
            this.add('-anim', source, "Focus Blast", target);
        },
        type: "Dragon",
        flags: {
            protect: 1,
            mirror: 1
        },
        target: "normal",
    },
    //jigglykongisfum16
    "sphealwithit": {
        id: "sphealwithit",
        name: "Spheal with It",
        basePower: 0,
        priority: 0,
        accuracy: 100,
        pp: 15,
        category: "Status",
        secondary: false,
        onHit: function(target, source, move) {
            this.add('c|&JigglykongisFUM16|Spheal with It!');
        },
        boosts: {
            def: 2,
            spa: 2,
            spe: 2,
            spd: 2,
            accuracy: 2,
        },
        flags: {
            snatch: 1
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('-still');
            this.add('-anim', source, "Quiver Dance", target);
        },
        target: "self",
        type: "Water",
    },
    //alolaludicolo
    "mymixtape": {
        id: "mymixtape",
        name: "My Mixtape",
        priority: 1,
        self: {
            boosts: {
                spa: 1,
                spe: 1
            }
        },
        flags: {
            protect: 1,
            mirror: 1
        },
        secondary: false,
        category: "Special",
        onHit: function(target, source, move) {
            this.add('c|*Alola Ludicolo|Lemme drop out dis new mixtape fam.... I know it\'s **STRAIGHT FIRE** m8!');
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Fire Blast", target);
        },
        basePower: 90,
        pp: 15,
        accuracy: 100,
        target: "normal",
        type: "Fire",
    },
    //backatmyday
    "megaflare": {
        id: "megaflare",
        name: "Megaflare",
        basePower: 60,
        accuracy: true,
        pp: 10,
        priority: 0,
        secondary: false,
        category: "Physical",
        onHit: function(target, source, move) {
            this.add('c|@Back At My Day|Why isn\'t this a Fire type move....?');
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Seed Flare", target);
        },
        flags: {
            protect: 1,
            mirror: 1
        },
        ignoreImmunity: true,
        ignoreDefensive: true,
        type: "Normal",
        target: "allAdjacentFoes",
    },
    //backatmyday
    "solarslap": {
        id: "solarslap",
        name: "Solar Slap",
        accuracy: 100,
        basePower: 120,
        category: "Physical",
        pp: 10,
        priority: 0,
        flags: {
            charge: 1,
            protect: 1,
            mirror: 1
        },
        onTry: function(attacker, defender, move) {
            if (attacker.removeVolatile(move.id)) {
                return;
            }
            this.add('-prepare', attacker, move.name, defender);
            if (this.isWeather(['sunnyday', 'desolateland']) || !this.runEvent('ChargeMove', attacker, defender, move)) {
                this.add('-anim', attacker, move.name, defender);
                return;
            }
            attacker.addVolatile('twoturnmove', defender);
            return null;
        },
        onBasePowerPriority: 4,
        onBasePower: function(basePower, pokemon, target) {
            if (this.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
                this.debug('weakened by weather');
                return this.chainModify(0.5);
            }
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Solar Beam", target);
        },
        secondary: false,
        target: "normal",
        type: "Grass",
    },
    //mewth
    "roleplaying": {
        id: "roleplaying",
        name: "Roleplaying",
        category: "Physical",
        basePower: 90,
        accuracy: true,
        priority: 1,
        pp: 20,
        type: "Normal",
        secondary: false,
        self: {
            boosts: {
                atk: 1,
                spe: 1
            },
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
        flags: {
            protect: 1,
            mirror: 1,
            contact: 1
        },
        isCrit: true,
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Focus Energy", target);
            this.add('-anim', source, "Extreme Speed", target);
        },
        target: "normal",
    },
    //happysong
    "strikeyoudown": {
        id: "strikeyoudown",
        name: "Strike You Down",
        basePower: 110,
        accuracy: 100,
        priority: 0,
        pp: 10,
        secondary: false,
        category: "Physical",
        type: "Psychic",
        onHit: function(target, source, move) {
            this.add('c|@Happy Song|I\'m gonna strike you down right now!');
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Psycho Cut", target);
        },
        flags: {
            protect: 1,
            mirror: 1,
            contact: 1
        },
        target: "Normal",
    },
    //bedevil
    "kappa": {
        id: "kappa",
        name: "kappa",
        accuracy: 100,
        basePower: 90,
        pp: 15,
        priority: 1,
        self: {
            boosts: {
                spa: 1,
                spe: 1
            }
        },
        category: "Special",
        flags: {
            protect: 1,
            mirror: 1
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Nasty Plot", target);
            this.add('-anim', source, "Sacred Fire", target);
        },
        type: "Fire",
        target: "normal",
    },
    //sotahigurashi
    "zencreate": {
        id: "zencreate",
        name: "Zen Create",
        accuracy: 95,
        basePower: 180,
        category: "Physical",
        pp: 5,
        priority: 0,
        flags: {
            contact: 1,
            protect: 1,
            mirror: 1
        },
        self: {
            boosts: {
                spe: -1,
                def: -1,
                spd: -1,
            },
        },
        onHit: function(target, source, move) {
            this.add('c|☥Sota Higurashi|Don\'t forget about me....');
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "V-Create", target);
        },
        secondary: false,
        target: "normal",
        type: "Psychic",
    },
    //philmiester
    "heathcliffsrevenge": {
        id: "heathcliffsrevenge",
        name: "Heathcliff's Revenge",
        category: "Status",
        basePower: 0,
        priority: 0,
        accuracy: 100,
        flags: {
            snatch: 1
        },
        boosts: {
            atk: 2,
            spe: 2
        },
        pp: 20,
        secondary: false,
        onHit: function(target, source, move) {
            this.add('c|@Philmiester|I\'m here to avenge Heathcliff <3');
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Dragon Dance", target);
        },
        type: "Psychic",
        target: "self",
    },
    //kairak
    "bowingandblowing": {
        id: "bowingandblowing",
        name: "Bowing and Blowing",
        category: "Physical",
        basePower: 95,
        accuracy: 100,
        priority: 0,
        flags: {
            protect: 1,
            mirror: 1,
            contact: 1
        },
        secondary: {
            chance: 40,
            status: "tox"
        },
        pp: 15,
        onHit: function(target, source, move) {
            this.add('c|%Kairak|Bowing and blowing, gj squad.');
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Poison Jab", target);
        },
        type: "Poison",
        target: "normal",
    },
    //volco
    "volcanosrevenge": {
        id: "volcanosrevenge",
        name: "Volcano's Revenge",
        pp: 10,
        basePower: 120,
        accuracy: 100,
        flags: {
            protect: 1,
            mirror: 1
        },
        secondary: {
            chance: 20,
            volatileStatus: "confusion"
        },
        defensiveCategory: "Physical",
        self: {
            chance: 20,
            boosts: {
                spa: 1,
                spe: 1
            }
        },
        category: "Special",
        priority: 0,
        onHit: function(target, source, move) {
            this.add('c|%Volco|SEE YOU ALL IN HELL!!!!!!!!');
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Steam Eruption", target);
        },
        target: "normal",
        type: "Fire",
    },
    //bronze0re
    "dyingstar": {
        id: "dyingstar",
        name: "Dying Star",
        selfdestruct: true,
        basePower: 200,
        category: "Special",
        accuracy: true,
        priority: 1,
        pp: 5,
        flags: {
            protect: 1,
            mirror: 1
        },
        onHit: function(target, source, move) {
            this.add('c|%Bronze0re|RIP Star');
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Explosion", target);
        },
        type: "Fire",
        target: "normal",
        secondary: false,
    },
    //supanova
    "supernova": {
        id: "supernova",
        name: "Supernova",
        ohko: true,
        accuracy: true,
        selfdestruct: true,
        basePower: 0,
        category: "Physical",
        priority: 1,
        pp: 5,
        flags: {
            protect: 1,
            mirror: 1
        },
        onPrepareHit: function(target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Explosion", target);
        },
        type: "Fire",
        target: "normal",
        secondary: false,
    },
};
