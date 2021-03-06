'use strict';

exports.BattleMovedex = {
    //deathlyplays
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
        onHit: function (target, source, move) {
            this.add('c|~Insist|Subscribe to http://youtube.com/DeathlyPlays');
        },
        onPrepareHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Hydro Pump", target);
        },
        basePower: 90,
        pp: 15,
        accuracy: 100,
        target: "normal",
        type: "Water",
        zMovePower: 140,
        contestType: "Cool",
    },
    //DeathlyPlays
    "exiledfromallothers": {
        id: "exiledfromallothers",
        name: "Exiled From All Others",
        basePower: 140,
        accuracy: 100,
        pp: 1,
        secondary: false,
        category: "Special",
        isViable: true,
        isZ: "playniumz",
        priority: 1,
        flags: {
            protect: 1
        },
        self: {
            boosts: {
                atk: 1,
                def: 1,
                spa: 1,
                spd: 1,
                spe: 1,
                accuracy: 1,
                evasion: 1
            }
        },
        shortDesc: "Like so amazing mannnnn, like look at dem boosts boi",
        onHit: function (target, source, move) {
            this.add('c|~Insist|Exiled from all others, we shall become greater than ever before.');
        },
        onPrepareHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Hydro Pump", target);
        },
        target: "normal",
        type: "Water",
    },
    //Jigglykong
    "plasmablast": {
        accuracy: 100,
        basePower: 120,
        category: "Special",
        id: "plasmablast",
        name: "Plasma Blast",
        pp: 10,
        priority: 0,
        flags: {
            protect: 1,
            mirror: 1
        },
        secondary: [{
            chance: 20,
            status: 'brn'
        }],
        onPrepareHit: function (target, source, move) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Techno Blast", target);
        },
        onEffectiveness: function (typeMod, type, move) {
            return typeMod + this.getEffectiveness('Electric', type);
        },
        target: "normal",
        type: "Normal"
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
        onHit: function (target, source, move) {
            this.add('c| CielTSnow|Who\'s getting slapped next!?!?!');
        },
        onPrepareHit: function (target, source) {
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
        onHit: function (target, source, move) {
            this.add('c| CateQuil|SPLASH');
        },
        onPrepareHit: function (target, source) {
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
        onHit: function (target, source, move) {
            this.add('c| Vivid is a God|JET FUMES DON\'T MELT STEEL BEAMS!!!!!!');
        },
        onPrepareHit: function (target, source) {
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
    //Jigglykong
    "sphealwithit": {
        id: "sphealwithit",
        name: "Spheal with It",
        basePower: 0,
        priority: 0,
        accuracy: 100,
        pp: 15,
        category: "Status",
        secondary: false,
        onHit: function (target, source, move) {
            this.add('c|&Jigglykong|Spheal with It!');
        },
        boosts: {
            def: 2,
            spa: 2,
            spe: 2,
            spd: 2,
            accuracy: 2
        },
        flags: {
            snatch: 1
        },
        onPrepareHit: function (target, source) {
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
            mirror: 1,
            defrost: 1
        },
        secondary: false,
        category: "Special",
        onHit: function (target, source, move) {
            this.add('c|*Crystal Ludicolo|Lemme drop out dis new mixtape fam.... I know it\'s **STRAIGHT FIRE** m8!');
        },
        onPrepareHit: function (target, source) {
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
        onHit: function (target, source, move) {
            this.add('c|@Back At My Day|Why isn\'t this a Fire type move....?');
        },
        onPrepareHit: function (target, source) {
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
        onTry: function (attacker, defender, move) {
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
        onBasePower: function (basePower, pokemon, target) {
            if (this.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
                this.debug('weakened by weather');
                return this.chainModify(0.5);
            }
        },
        onPrepareHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Solar Beam", target);
        },
        secondary: false,
        target: "normal",
        type: "Grass",
    },
    "teraflare": {
        id: "teraflare",
        name: "Teraflare",
        basePower: 120,
        accuracy: true,
        ignoreDefensive: true,
        pp: 1,
        onPrepareHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Seed Flare", target);
        },
        priority: 0,
        flags: {
            contact: 1,
            protect: 1,
            mirror: 1
        },
        isZ: "flarez",
        onTryHit: function (pokemon) {
            // will shatter screens through sub, before you hit
            if (pokemon.runImmunity('Normal')) {
                pokemon.side.removeSideCondition('reflect');
                pokemon.side.removeSideCondition('lightscreen');
            }
        },
        secondary: false,
        type: "Normal",
        target: "foeactive",
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
                onStart: function (pokemon) {
                    this.add('-start', pokemon, 'move: Focus Energy');
                },
                onModifyCritRatio: function (critRatio) {
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
        onPrepareHit: function (target, source) {
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
        onHit: function (target, source, move) {
            this.add('c| Kimisumi|I\'m gonna strike you down right now!');
        },
        onPrepareHit: function (target, source) {
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
    "prfmador": {
        id: "prfmador",
        name: "prfmador",
        accuracy: 100,
        basePower: 90,
        pp: 15,
        priority: 0,
        self: {
            boosts: {
                spa: 1,
                spe: 1
            }
        },
        status: "frz",
        category: "Special",
        flags: {
            protect: 1,
            mirror: 1
        },
        onPrepareHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Nasty Plot", target);
            this.add('-anim', source, "Blizzard", target);
        },
        type: "Ice",
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
        onHit: function (target, source, move) {
            this.add('c|☥Sota Higurashi|Don\'t forget about me....');
        },
        onPrepareHit: function (target, source) {
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
        onHit: function (target, source, move) {
            this.add('c| Philmiester|I\'m here to avenge Heathcliff <3');
        },
        onPrepareHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Dragon Dance", target);
        },
        type: "Psychic",
        target: "self",
    },
    //AB Starfox
    "fuckthismatchup": {
        accuracy: 70,
        basePower: 110,
        category: "Special",
        id: "fuckthismatchup",
        name: "Fuck This Matchup",
        pp: 15,
        priority: 1,
        flags: {
            protect: 1,
            mirror: 1
        },
        onTryHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Hurricane", target);
        },
        onEffectiveness: function (typeMod, type) {
            if (type === 'Steel') return 1;
        },
        secondary: {
            chance: 30,
            volatileStatus: "confusion",
        },
        target: "normal",
        type: "Flying",
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
        onHit: function (target, source, move) {
            this.add('c|+Kairak|Bowing and blowing, gj squad.');
        },
        onPrepareHit: function (target, source) {
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
            mirror: 1,
            defrost: 1
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
        onHit: function (target, source, move) {
            this.add('c|~Volco|SEE YOU ALL IN HELL!!!!!!!!');
        },
        onPrepareHit: function (target, source) {
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
        basePower: 250,
        category: "Special",
        accuracy: true,
        priority: 1,
        pp: 5,
        flags: {
            protect: 1,
            mirror: 1,
            defrost: 1
        },
        selfdestruct: "always",
        onHit: function (target, source, move) {
            this.add('c|+Bronze0re|RIP Star');
        },
        onPrepareHit: function (target, source) {
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
            mirror: 1,
            defrost: 1
        },
        onPrepareHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Explosion", target);
        },
        type: "Fire",
        target: "normal",
        secondary: false,
    },
    //speckeldorft
    "fuckingnormies": {
        id: "fuckingnormies",
        name: "FUCKING NORMIES",
        basePower: 70,
        accuracy: true,
        pp: 15,
        category: "Special",
        drain: [1, 2],
        priority: 0,
        self: {
            boosts: {
                def: 2,
                spa: 2,
                spd: 2,
                spe: 2,
                accuracy: 2
            }
        },
        secondary: {
            volatileStatus: 'confusion'
        },
        onPrepareHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Hyper Voice", target);
        },
        onHit: function (target, source, move) {
            this.add('c| Speckeldorft|FUCKING NORMIES');
            this.add('c| Speckeldorft|RRRRRRRRRRRRRRREEEEEEEEEEEEEEEEEEEEEEE');
        },
        target: "normal",
        flags: {
            snatch: 1,
            protect: 1
        },
        type: "Fairy",
    },
    //yoshonic
    "downb": {
        id: "downb",
        name: "Down B",
        pp: 15,
        basePower: 120,
        accuracy: 100,
        category: "Special",
        priority: 1,
        onPrepareHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Extreme Speed", target);
            this.add('-anim', source, "Storm Throw", target);
            this.add('-anim', source, "Egg Bomb", target);
        },
        flags: {
            protect: 1,
            mirror: 1
        },
        self: {
            boosts: {
                spa: 1,
                spe: 1
            },
        },
        secondary: false,
        target: "normal",
        type: "Dark",
    },
    "cripplingkiss": {
        id: "cripplingkiss",
        name: "Crippling Kiss",
        accuracy: 100,
        basePower: 0,
        category: "Status",
        pp: 10,
        priority: 0,
        flags: {
            protect: 1,
            mirror: 1,
            reflectable: 1
        },
        onHit: function (target, source, move) {
            this.attrLastMove('[still]')
            this.add('-anim', source, 'Leech Seed', target);
            this.add('-anim', source, 'Attract', target);
            this.add('-anim', source, 'Confuse Ray', target);
            this.add('-anim', source, "String Shot", target);
        },
        secondary: {
            volatileStatus: "confusion"
        },
        status: "tox",
        volatileStatus: "leechseed",
        effect: {
            onStart: function (target) {
                this.add('-start', target, 'move: Leech Seed');
            },
            onResidualOrder: 8,
            onResidual: function (pokemon) {
                let target = this.effectData.source.side.active[pokemon.volatiles['leechseed'].sourcePosition];
                if (!target || target.fainted || target.hp <= 0) {
                    this.debug('Nothing to leech into');
                    return;
                }
                let damage = this.damage(pokemon.maxhp / 8, pokemon, target);
                if (damage) {
                    this.heal(damage, target, pokemon);
                }
            },
        },
        onTryHit: function (target) {
            if (target.hasType('Grass')) {
                this.add('-immune', target, '[msg]');
                return null;
            }
        },
        boosts: {
            spe: -2,
        },
        self: {
            heal: [1, 4]
        },
        target: "normal",
        type: "Fairy",
    },
    "evictus": {
        id: "evictus",
        name: "Evictus",
        basePower: 120,
        accuracy: 100,
        pp: 15,
        secondary: false,
        category: "Physical",
        self: {
            boosts: {
                atk: 1,
                spe: 1
            }
        },
        priority: 1,
        onHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, 'Quick Attack', target);
        },
        flags: {
            protect: 1,
            contact: 1
        },
        target: "normal",
        type: "Normal",
    },
    "repel": {
        id: "repel",
        name: "Repel",
        basePower: 0,
        accuracy: 100,
        pp: 10,
        secondary: false,
        volatileStatus: 'confusion',
        onHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, 'Teleport', target);
        },
        status: 'par',
        priority: 0,
        category: "Status",
        ignoreImmunity: true,
        onModifyMove: function (move, pokemon, target) {
            move.type = '???';
        },
        flags: {
            protect: 1,
            sound: 1,
            authentic: 1,
            reflectable: 1
        },
        type: "Normal",
        target: "normal",
    },
    "fastasfucc": {
        id: "fastasfucc",
        name: "Fast as Fucc",
        basePower: 60,
        pp: 15,
        accuracy: 100,
        flags: {
            protect: 1,
            mirror: 1
        },
        desc: "Base 60 Normal Type priority move which is super effective on steel types, 30% chance to raise Speed by 1",
        priority: 1,
        onTryHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Quick Attack", target);
        },
        onEffectiveness: function (typeMod, type) {
            if (type === 'Steel') return 1;
        },
        secondary: {
            chance: 30,
            self: {
                boosts: {
                    spe: 1,
                },
            },
        },
        onHit: function (target, source, move) {
            this.add('c| AB Starfox|I don\'t think you have any idea how fast I really am, I\'m fast as fucc boiiiiii');
        },
        target: "normal",
        type: "Normal",
    },
    "attitudeadjustment": {
        id: "attitudeadjustment",
        name: "Attitude Adjustment",
        basePower: 0,
        accuracy: 30,
        category: "Physical",
        onHit: function (target, source, move) {
            this.add('c| THEMEMES69|**YOU CAN\'T SEE ME!!!!!!!!!!**');
        },
        ohko: true,
        pp: 5,
        priority: 0,
        secondary: false,
        flags: {
            protect: 1,
            contact: 1
        },
        target: "normal",
        type: "Fighting",
        zMovePower: 150,
    },
    "acceptthememes": {
        id: "acceptthememes",
        name: "Accept The Memes",
        basePower: 0,
        accuracy: true,
        category: "Physical",
        onHit: function (target, source, move) {
            this.add('c| THEMEMES69|GET MEMED OR DIE TRYING!');
        },
        ohko: true,
        pp: 1,
        secondary: false,
        flags: {
            protect: 1,
            contact: 1
        },
        priority: 0,
        target: "normal",
        type: "Fighting",
        isZ: "thekidz",
    },
    //foreword
    "teamplayer": {
        id: "teamplayer",
        name: "Team Player",
        priority: -1,
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
        category: "Status",
        onPrepareHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Acupressure", target);
        },
        self: {
            onHit: function (target) {
                let stats = [];
                for (let stat in target.boosts) {
                    if (target.boosts[stat] < 6) {
                        stats.push(stat);
                    }
                }
                if (stats.length) {
                    let randomStat = stats[this.random(stats.length)];
                    let boost = {};
                    boost[randomStat] = 2;
                    this.boost(boost);
                }
                else {
                    return false;
                }
            },
        },
        secondary: {
            self: {
                selfSwitch: 'copyvolatile',
            },
        },
        basePower: 0,
        pp: 15,
        accuracy: 100,
        target: "self",
        type: "Bug",
    },
    //HoeenHero
    "scripting": {
        category: "Status",
        id: "scripting",
        isNonstandard: true,
        name: "Scripting",
        pp: 10,
        secondary: {
            chance: 100,
            volatileStatus: 'confusion',
        },
        priority: 0,
        self: {
            boosts: {
                spa: 2,
                spd: 1,
            },
        },
        onHit: function (source) {
            this.setWeather('raindance');
        },
        onPrepareHit: function (target, source) {
            this.attrLastMove('[still]');
            this.add('', '>>> let p=p2.pokemon.find(p => p.speciesid===\'ludicolo\'); battle.boost({spa:1,spe:1},p); battle.setWeather(\'raindance\', p); for(let i in p1.pokemon) if(p1.pokemon[i].isActive) { p1.pokemon[i].setStatus(\'confusion\'); break;}');
            this.add('-anim', source, "Calm Mind", target);
            this.add('-anim', source, "Geomancy", target);
        },
        target: "Normal",
        type: "Psychic",
    },
};
