/* * * * * * * * * * * * * * * * * * * * * * * *
 *  Supercell Games Metagame                   *
 *  Coded by: Insist                           *
 * -I do not claim any of the Supercell games  *
 * as my own this is purely made for enjoyment *
 * of fans                                     *
 * * * * * * * * * * * * * * * * * * * * * * * */
'use strict';

exports.BattleScripts = {
    randomSupercellTeam: function (side) {
        let team = [];
        var variant = (this.random(2) === 1);
        var sets = {
            "Barbarian": {
                species: "Barbarian",
                item: "Leftovers",
                ability: "Adaptability",
                moves: ['knockoff', 'closecombat', 'playrough'],
                baseSignatureMove: "battleram",
                signatureMove: "Battle Ram",
                evs: {
                    atk: 252,
                    spe: 252,
                    def: 4
                },
                nature: "Adamant",
            },
            "Archer": {
                species: "Archer",
                item: "Life Orb",
                ability: "Sharpshooter",
                moves: ['psyshock', 'focusblast', 'vacuumwave'],
                baseSignatureMove: "arrowsiege",
                signatureMove: "Arrow Siege",
                evs: {
                    spa: 252,
                    spe: 252,
                    hp: 4
                },
                nature: "Timid",
            },
            "Goblin": {
                species: "Goblin",
                item: "Focus Sash",
                ability: "Theft",
                moves: ['thief', 'endeavor', 'extremespeed'],
                baseSignatureMove: "greed",
                signatureMove: "Greed",
                evs: {
                    atk: 252,
                    spe: 252,
                    hp: 4
                },
                nature: "Jolly",
            },
            "Giant": {
                species: "Regular Giant",
                item: "Leftovers",
                ability: "Meatshield",
                moves: ['recover', 'bulkup', 'drainpunch'],
                baseSignatureMove: "rebound",
                signatureMove: "rebound",
                evs: {
                    hp: 252,
                    atk: 252,
                    def: 4
                },
                nature: "Adamant",
            },
            "Wizard": {
                species: "Wizard",
                item: "Life Orb",
                ability: "Wizardry",
                moves: ['moonblast', 'icebeam', 'aurasphere'],
                baseSignatureMove: "fireball",
                signatureMove: "Fireball",
                evs: {
                    spa: 252,
                    spe: 252,
                    spd: 4
                },
                nature: "Timid",
            },
            "Balloon": {
                species: "Balloon",
                item: "Leftovers",
                ability: "I Gotz a Bomb",
                moves: ['roost', 'knockoff', 'suckerpunch'],
                baseSignatureMove: "airstrike",
                signatureMove: "Air Strike",
                evs: {
                    hp: 252,
                    atk: 252,
                    def: 4
                },
                nature: "Adamant",
            },
            "Minion": {
                species: "Minion",
                item: "Focus Sash",
                ability: "Mayhem",
                moves: ['hurricane', 'sludgewave', 'nastyplot'],
                baseSignatureMove: "evilbiding",
                signatureMove: "Evil Biding",
                evs: {
                    spa: 252,
                    spe: 252,
                    spd: 4
                },
                nature: "Timid",
            },
            "Hog Rider": {
                species: "Hog Rider",
                item: "Leftovers",
                ability: "HOG RIDDAH",
                moves: ['rockslide', 'drainpunch', 'extremespeed'],
                baseSignatureMove: "hammerslammer",
                signatureMove: "Hammer Slammer",
                evs: {
                    atk: 252,
                    spe: 252,
                    def: 4
                },
                nature: "Jolly",
            },
            "Witch": {
                species: "Witch",
                item: "Leftovers",
                ability: "Witchcraft",
                moves: ['recover', 'psystrike', 'moonblast'],
                baseSignatureMove: "raisethedead",
                signatureMove: "Raise the Dead",
                evs: {
                    hp: 252,
                    spd: 252,
                    spa: 4
                },
                nature: "Calm",
            },

        };
        let pool = Object.keys(sets);

        // Generate the team randomly.
        pool = Object.keys(sets).randomize();
        for (let i = 0; i < 6; i++) {
            let name = pool[i];
            let set = sets[name];
            set.name = name;
            set.level = 100;
            if (!set.ivs) {
                set.ivs = {
                    hp: 31,
                    atk: 31,
                    def: 31,
                    spa: 31,
                    spd: 31,
                    spe: 31
                };
            }
            else {
                for (let iv in {
                        hp: 31,
                        atk: 31,
                        def: 31,
                        spa: 31,
                        spd: 31,
                        spe: 31
                    }) {
                    set.ivs[iv] = iv in set.ivs ? set.ivs[iv] : 31;
                }
            }
            // Assuming the hardcoded set evs are all legal.
            if (!set.evs) set.evs = {
                hp: 84,
                atk: 84,
                def: 84,
                spa: 84,
                spd: 84,
                spe: 84
            };
            set.moves = [this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves)].concat(set.signatureMove);
            team.push(set);
        }

        return team;
    },
};
