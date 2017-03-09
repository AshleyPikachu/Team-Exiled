'use strict';

exports.BattleAbilities = {
    "sharpshooter": {
        id: "sharpshooter",
        name: "Sharpshooter",
        desc: "Sniper + Adaptability + Super Luck + uses Focus Energy, upon entry.",
        onStart: function (pokemon) {
            this.useMove('focusenergy', pokemon);
        },
        onModifyMove: function (move) {
            move.stab = 2;
        },
        onModifyDamage: function (damage, source, target, move) {
            if (move.crit) {
                this.debug('Sharpshooter boost');
                return this.chainModify(1.5);
            }
        },
        onModifyCritRatio: function (critRatio) {
			return critRatio + 1;
		},
    },
    "theft": {
        id: "theft",
        name: "Theft",
        desc: "Adaptability + Speed Boost + Moxie + Unburden",
        onModifyMove: function (move) {
            move.stab = 2;
        },
        onResidualOrder: 26,
        onResidualSubOrder: 1,
        onResidual: function (pokemon) {
            if (pokemon.activeTurns) {
                this.boost({
                    spe: 1
                });
            }
        },
        onAfterUseItem: function (item, pokemon) {
            if (pokemon !== this.effectData.target) return;
            pokemon.addVolatile('unburden');
        },
        onTakeItem: function (item, pokemon) {
            pokemon.addVolatile('unburden');
        },
        onEnd: function (pokemon) {
            pokemon.removeVolatile('unburden');
        },
        effect: {
            onModifySpe: function (spe, pokemon) {
                if (!pokemon.item) {
                    return this.chainModify(2);
                }
            },
        },
        onSourceFaint: function (target, source, effect) {
            if (effect && effect.effectType === 'Move') {
                this.boost({
                    atk: 1
                }, source);
            }
        },
    },
    "meatshield": {
        id: "meatshield",
        name: "Meatshield",
        desc: "Unaware + Stamina + Simple",
        onAnyModifyBoost: function (boosts, target) {
            let source = this.effectData.target;
            if (source === target) return;
            if (source === this.activePokemon && target === this.activeTarget) {
                boosts['def'] = 0;
                boosts['spd'] = 0;
                boosts['evasion'] = 0;
            }
            if (target === this.activePokemon && source === this.activeTarget) {
                boosts['atk'] = 0;
                boosts['spa'] = 0;
                boosts['accuracy'] = 0;
            }
        },
        onAfterDamage: function (damage, target, source, effect) {
            if (effect && effect.effectType === 'Move' && effect.id !== 'confused') {
                this.boost({
                    def: 1
                });
            }
        },
        onBoost: function (boost, target, source, effect) {
            if (effect && effect.id === 'zpower') return;
            for (let i in boost) {
                boost[i] *= 2;
            }
        },
    },
    "wizardry": {
        id: "wizardry",
        name: "Wizardry",
        desc: "Adaptability + Protean + Beast Boost",
        onModifyMove: function (move) {
            move.stab = 2;
        },
        onPrepareHit: function (source, target, move) {
            if (move.hasBounced) return;
            let type = move.type;
            if (type && type !== '???' && source.getTypes().join() !== type) {
                if (!source.setType(type)) return;
                this.add('-start', source, 'typechange', type, '[from] Protean');
            }
        },
        onSourceFaint: function (target, source, effect) {
            if (effect && effect.effectType === 'Move') {
                let stat = 'atk';
                let bestStat = 0;
                for (let i in source.stats) {
                    if (source.stats[i] > bestStat) {
                        stat = i;
                        bestStat = source.stats[i];
                    }
                }
                this.boost({
                    [stat]: 1
                }, source);
            }
        },
    },
    "igotzabomb": {
        id: "igotzabomb",
        name: "I Gotz a Bomb",
        desc: "Aftermath w/o contact flag needed + Unaware + Stamina",
        onAnyModifyBoost: function (boosts, target) {
            let source = this.effectData.target;
            if (source === target) return;
            if (source === this.activePokemon && target === this.activeTarget) {
                boosts['def'] = 0;
                boosts['spd'] = 0;
                boosts['evasion'] = 0;
            }
            if (target === this.activePokemon && source === this.activeTarget) {
                boosts['atk'] = 0;
                boosts['spa'] = 0;
                boosts['accuracy'] = 0;
            }
        },
        onAfterDamageOrder: 1,
        onAfterDamage: function (damage, target, source, move) {
            if (source && source !== target && !target.hp) {
                this.damage(source.maxhp / 2, source, target);
            }
        },
        onAfterDamage: function (damage, target, source, effect) {
            if (effect && effect.effectType === 'Move' && effect.id !== 'confused') {
                this.boost({
                    def: 1
                });
            }
        },
    },
    "mayhem": {
        id: "mayhem",
        name: "Mayhem",
        desc: "Adaptability + Unburden + Speed Boost + Flying type moves get +1 priority",
        onModifyMove: function (move) {
            move.stab = 2;
        },
        onResidualOrder: 26,
        onResidualSubOrder: 1,
        onResidual: function (pokemon) {
            if (pokemon.activeTurns) {
                this.boost({
                    spe: 1
                });
            }
        },
        onAfterUseItem: function (item, pokemon) {
            if (pokemon !== this.effectData.target) return;
            pokemon.addVolatile('unburden');
        },
        onTakeItem: function (item, pokemon) {
            pokemon.addVolatile('unburden');
        },
        onEnd: function (pokemon) {
            pokemon.removeVolatile('unburden');
        },
        effect: {
            onModifySpe: function (spe, pokemon) {
                if (!pokemon.item) {
                    return this.chainModify(2);
                }
            },
        },
        onModifyPriority: function (priority, pokemon, target, move) {
            if (move && move.type === 'Flying') return priority + 1;
        },
    },
    "hogriddah": {
        id: "hogriddah",
        name: "HOG RIDDAH",
        desc: "Speed Boost + nullifies abilities",
        onResidualOrder: 26,
        onResidualSubOrder: 1,
        onResidual: function (pokemon) {
            if (pokemon.activeTurns) {
                this.boost({
                    spe: 1
                });
            }
        },
        onAnyModifyBoost: function (boosts, target) {
            let source = this.effectData.target;
            if (source === target) return;
            if (source === this.activePokemon && target === this.activeTarget) {
                boosts['def'] = 0;
                boosts['spd'] = 0;
                boosts['evasion'] = 0;
            }
            if (target === this.activePokemon && source === this.activeTarget) {
                boosts['atk'] = 0;
                boosts['spa'] = 0;
                boosts['accuracy'] = 0;
            }
        },
    },
    "witchcraft": {
        id: "witchcraft",
        name: "Witchcraft",
        desc: "Unaware + Cursed Body",
        onAnyModifyBoost: function (boosts, target) {
            let source = this.effectData.target;
            if (source === target) return;
            if (source === this.activePokemon && target === this.activeTarget) {
                boosts['def'] = 0;
                boosts['spd'] = 0;
                boosts['evasion'] = 0;
            }
            if (target === this.activePokemon && source === this.activeTarget) {
                boosts['atk'] = 0;
                boosts['spa'] = 0;
                boosts['accuracy'] = 0;
            }
        },
        onAfterDamage: function (damage, target, source, move) {
            if (!source || source.volatiles['disable']) return;
            if (source !== target && move && move.effectType === 'Move' && !move.isFutureMove) {
                if (this.random(10) < 3) {
                    source.addVolatile('disable', this.effectData.target);
                }
            }
        },
    },
};
