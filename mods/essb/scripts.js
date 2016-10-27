'use strict';

Array.prototype.randomize = function() {
    let arr = this.slice(0);
    var i = arr.length,
        j, x;
    while (i) {
        j = (Math.random() * i) | 0;
        x = arr[--i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
};

const replaceAlts = {};

exports.BattleScripts = {
    randomSeasonalMeleeTeam: function(side) {
        let team = [];
        var variant = (this.random(2) === 1);
        var sets = {
            //Admins
            '~ReturningAvenger': {
                species: 'Ludicolo',
                ability: 'Crippling Depression',
                item: 'Life Orb',
                gender: 'M',
                shiny: true,
                moves: ['freezedry', 'gigadrain', 'focusblast'],
                baseSignatureMove: 'aquasubscribe',
                signatureMove: 'Aqua Subscribe',
                evs: {
                    spa: 252,
                    spe: 252,
                    hp: 4
                },
                nature: 'Timid',
            },
            "~Bedevil": {
                species: "Ninetales",
                ability: "prfmlmao",
                item: "Life Orb",
                gender: "F",
                moves: ['boomburst', 'solarbeam', 'earthpower'],
                baseSignatureMove: "kappa",
                signatureMove: "kappa",
                evs: {
                    spa: 252,
                    spe: 252,
                    spd: 4
                },
                nature: "Timid",
            },
            '~CateQuil': {
                species: 'Magikarp',
                ability: 'GAWD',
                item: 'Focus Sash',
                gender: 'M',
                shiny: true,
                moves: ['splash', 'flail', 'precipiceblades'],
                baseSignatureMove: 'fuckingsplashing',
                signatureMove: 'FUCKING SPLASHING',
                evs: {
                    atk: 252,
                    spe: 252,
                    hp: 4
                },
                nature: 'Adamant',
            },

            //Leaders
            '&JigglykongisFUM16': {
                species: 'Spheal',
                ability: 'MLG Sunglasses',
                item: 'Eviolite',
                gender: 'M',
                moves: ['scald', 'recover', 'toxic'],
                baseSignatureMove: 'sphealwithit',
                signatureMove: 'Spheal With It',
                evs: {
                    hp: 252,
                    def: 252,
                    spa: 4
                },
                nature: 'Bold',
            },
            '&Vivid is a God': {
                species: 'Latios',
                ability: 'JetStream',
                item: 'Life Orb',
                gender: 'M',
                moves: ['psychic', 'surf', 'fireblast'],
                baseSignatureMove: 'jetblast',
                signatureMove: 'Jet Blast',
                evs: {
                    spa: 252,
                    spe: 252,
                    hp: 4
                },
                nature: 'Timid',
            },
            '&Mewth': {
                species: "Glameow",
                ability: 'Sniper',
                item: 'Scope Lens',
                gender: "F",
                moves: ['extremespeed', 'nightslash', 'psychocut'],
                baseSignatureMove: 'roleplaying',
                signatureMove: "Roleplaying",
                evs: {
                    atk: 252,
                    spe: 252,
                    hp: 4
                },
                nature: "Jolly",
            },
            //Bots
            '*Alola Ludicolo': {
                species: 'Ludicolo',
                ability: 'Desolate Land',
                item: 'Life Orb',
                gender: 'M',
                shiny: true,
                moves: ['freezedry', 'solarbeam', 'earthpower'],
                baseSignatureMove: 'mymixtape',
                signatureMove: 'My Mixtape',
                evs: {
                    spa: 252,
                    spe: 252,
                    hp: 4
                },
                nature: 'Timid',
            },
            //Moderators
            '@Back At My Day': {
                species: 'Groudon-Primal',
                ability: 'Landlord',
                gender: 'M',
                moves: ['earthquake', 'firepunch', 'solarslap'],
                baseSignatureMove: 'megaflare',
                signatureMove: 'Megaflare',
                evs: {
                    atk: 252,
                    hp: 252,
                    def: 4
                },
                nature: 'Adamant',
            },
            '@Happy Song': {
                species: 'Gallade-Mega',
                ability: 'God Complex',
                item: 'Life Orb',
                gender: 'F',
                moves: ['precipiceblades', 'closecombat', 'extremespeed'],
                baseSignatureMove: 'strikeyoudown',
                signatureMove: 'Strike You Down',
                evs: {
                    atk: 252,
                    spe: 252,
                    hp: 4
                },
                nature: 'Jolly',
            },
            '@Astral Wobz': {
                species: "Musharna",
                ability: "WobzDoezJobz",
                item: "Leftovers",
                gender: "M",
                moves: ['storedpower', 'chargebeam', 'drainingkiss'],
                signatureMove: 'sludgebomb',
                evs: {
                    hp: 252,
                    spa: 220,
                    spd: 16,
                    def: 16
                },
                nature: "Modest",
            },
            //Drivers
            '%Kairak': {
                species: 'Nidorina',
                ability: 'gj squad',
                item: 'Focus Sash',
                gender: 'M',
                moves: ['extremespeed', 'precipiceblades', 'knockoff'],
                baseSignatureMove: 'bowingandblowing',
                signatureMove: 'Bowing and Blowing',
                evs: {
                    atk: 252,
                    spe: 252,
                    hp: 4
                },
                nature: 'Jolly',
            },
            "%Philmiester": {
                species: "Gallade-Mega",
                ability: "Demon's Blade",
                item: "Leftovers",
                gender: 'M',
                moves: ['drainpunch', 'psychocut', 'icepunch'],
                baseSignatureMove: "heathcliffsrevenge",
                signatureMove: "Heathcliff's Revenge",
                evs: {
                    atk: 252,
                    spe: 252,
                    spd: 4
                },
                nature: "Jolly",
            },
            '%Bronze0re': {
                species: 'Volcarona',
                ability: 'Brilliant Scale',
                item: 'Weakness Policy',
                gender: 'M',
                moves: ['quiverdance', 'fierydance', 'oblivionwing'],
                baseSignatureMove: 'dyingstar',
                signatureMove: 'Dying Star',
                evs: {
                    spa: 252,
                    spe: 252,
                    hp: 4
                },
                nature: 'Timid',
            },
            '%Volco': {
                species: 'Volcanion',
                ability: 'Volcanic Ash',
                item: 'Assault Vest',
                gender: 'M',
                moves: ['steameruption', 'gigadrain', 'earthpower'],
                baseSignatureMove: 'volcanosrevenge',
                signatureMove: 'Volcano\'s Revenge',
                evs: {
                    spa: 252,
                    spe: 252,
                    spd: 4
                },
                nature: 'Modest',
            },
            //Gods
            '☥Sota Higurashi': {
                species: 'Victini',
                ability: 'Contrary',
                item: 'Expert Belt',
                gender: 'M',
                moves: ['vcreate', 'boltstrike', 'uturn'],
                baseSignatureMove: 'zencreate',
                signatureMove: 'Zen Create',
                evs: {
                    atk: 252,
                    spe: 252,
                    def: 4
                },
                nature: 'Adamant',
            },
            //Voices
            '+TheAmazingYuki': {
                species: 'Mewtwo-Mega-Y',
                ability: 'Contrary',
                item: 'Choice Specs',
                gender: 'M',
                moves: ['vcreate', 'dracometeor'],
                signatureMove: 'Psycho Boost',
                evs: {
                    spa: 252,
                    spe: 252,
                    atk: 4
                },
                nature: 'Hasty',
            },
            '+a gay moose': {
                species: 'Zygarde',
                ability: 'Speed Boost',
                item: 'Leftovers',
                gender: 'M',
                moves: ['precipiceblades', 'boltstrike', 'dragonascent'],
                signatureMove: 'Outrage',
                evs: {
                    atk: 252,
                    spe: 252,
                    hp: 4
                },
                nature: 'Jolly',
            },
            '+CielTSnow': {
                species: 'Lucario-Mega',
                ability: 'Adaptability',
                item: 'Life Orb',
                gender: 'M',
                moves: ['flashcannon', 'flamethrower', 'icebeam'],
                baseSignatureMove: 'pimpslap',
                signatureMove: 'Pimp Slap',
                evs: {
                    spa: 252,
                    spe: 252,
                    hp: 4
                },
                nature: 'Timid',
            },
            //Regs
            'Supanova': {
                species: 'Dialga',
                ability: 'Supanova',
                item: 'Air Balloon',
                gender: 'M',
                moves: ['swordsdance', 'batonpass', 'protect'],
                baseSignatureMove: 'supernova',
                signatureMove: 'Supernova',
                evs: {
                    atk: 252,
                    spe: 252,
                    hp: 4
                },
                nature: 'Jolly',
            },
            'TheAquaPhoenix': {
                species: "Articuno",
                ability: 'How to be OP 101',
                item: "Leftovers",
                gender: "M",
                shiny: true,
                moves: ['freezedry', 'oblivionwing', 'roost'],
                signatureMove: "Scald",
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

        // replace the user into the 4th slot
        let userid = toId(side.name);
        if (replaceAlts[userid]) userid = replaceAlts[userid];

        let usermon = Object.keys(sets).filter(n => toId(n) === userid),
            self = null;
        if (usermon && usermon.length) self = usermon[0]; // this is the user's pokemon. 
        if (self && pool.indexOf(self) > 5) pool[4] = self;

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
