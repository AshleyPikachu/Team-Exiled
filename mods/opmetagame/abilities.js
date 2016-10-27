'use strict';
exports.BattleAbilities = {
	"blissful": {
		id: "blissful",
		name: "Blissful",
		//priority to special attacks
		onModifyPriority: function(priority, pokemon, target, move) {
			if (move && move.category === 'Special') {
				return priority + 6;
			}
		},
	},
	"wynaut": {
		id: "Wynaut",
		name: "Wynaut",
		//shadowtag
		onFoeTrapPokemon: function(pokemon) {
			if (!pokemon.hasAbility('shadowtag') && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function(pokemon, source) {
			if (!source) source = this.effectData.target;
			if (!pokemon.hasAbility('shadowtag') && this.isAdjacent(pokemon, source)) {
				pokemon.maybeTrapped = true;
			}
		},
		//prankster
		onModifyPriority: function(priority, pokemon, target, move) {
			if (move && move.category === 'Status') {
				return priority + 6;
			}
		},
	},
	"peoplelikeyoudeservetoburninhell": {
		id: "peoplelikeyoudeservetoburninhell",
		name: "People Like You Deserve to BURN IN HELL",
		//shadowtag
		onFoeTrapPokemon: function(pokemon) {
			if (!pokemon.hasAbility('shadowtag') && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function(pokemon, source) {
			if (!source) source = this.effectData.target;
			if (!pokemon.hasAbility('shadowtag') && this.isAdjacent(pokemon, source)) {
				pokemon.maybeTrapped = true;
			}
		},
		//sheerforce
		onModifyMove: function(move, pokemon) {
			if (move.secondaries) {
				delete move.secondaries;
				// Actual negation of `AfterMoveSecondary` effects implemented in scripts.js
				pokemon.addVolatile('sheerforce');
			}
		},
		effect: {
			duration: 1,
			onBasePowerPriority: 8,
			onBasePower: function(basePower, pokemon, target, move) {
				return this.chainModify([0x14CD, 0x1000]);
			},
		},
	},
	"risk": {
		id: "risk",
		name: "Risk",
		//unaware
		onAnyModifyBoost: function(boosts, target) {
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
		//airlock and moldbreaker
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Air Lock');
			this.add('-ability', pokemon, 'Mold Breaker');
		},
		//moody
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			let stats = [];
			let boost = {};
			for (let statPlus in pokemon.boosts) {
				if (pokemon.boosts[statPlus] < 6) {
					stats.push(statPlus);
				}
			}
			let randomStat = stats.length ? stats[this.random(stats.length)] : "";
			if (randomStat) boost[randomStat] = 2;

			stats = [];
			for (let statMinus in pokemon.boosts) {
				if (pokemon.boosts[statMinus] > -6 && statMinus !== randomStat) {
					stats.push(statMinus);
				}
			}
			randomStat = stats.length ? stats[this.random(stats.length)] : "";
			if (randomStat) boost[randomStat] = -1;

			this.boost(boost);
		},
		//simple
		onBoost: function(boost) {
			for (let i in boost) {
				boost[i] *= 2;
			}
		},
		stopAttackEvents: true,
		suppressWeather: true,
	},
	"sanik": {
		id: "sanik",
		name: "Sanik",
		//boosts attack and speed every turn
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({
					spe: 1,
					atk: 1
				});
			}
		},
		//bug type -ilate
		onModifyMovePriority: -1,
		onModifyMove: function(move, pokemon) {
			if (move.type === 'Normal' && move.id !== 'naturalgift') {
				move.type = 'Bug';
				if (move.category !== 'Status') pokemon.addVolatile('sanik');
			}
		},
		effect: {
			duration: 1,
			onBasePowerPriority: 8,
			onBasePower: function(basePower, pokemon, target, move) {
				return this.chainModify([0x14CD, 0x1000]);
			},
		},
		//unburden
		onAfterUseItem: function(item, pokemon) {
			if (pokemon !== this.effectData.target) return;
			pokemon.addVolatile('unburden');
		},
		onTakeItem: function(item, pokemon) {
			pokemon.addVolatile('unburden');
		},
		onEnd: function(pokemon) {
			pokemon.removeVolatile('unburden');
		},
		effect: {
			onModifySpe: function(spe, pokemon) {
				if (!pokemon.item) {
					return this.chainModify(2);
				}
			},
		},
	},
	"bawlky": {
		id: "bawlky",
		name: "bawlky",
		//rough skin and iron barbs
		onAfterDamageOrder: 1,
		onAfterDamage: function(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(source.maxhp / 4, source, target, null, true);
			}
			//aftermath
			if (source && source !== target && move && move.flags['contact'] && !target.hp) {
				this.damage(source.maxhp / 4, source, target, null, true);
			}
		},
		//prankster
		onModifyPriority: function(priority, pokemon, target, move) {
			if (move && move.category === 'Status') {
				return priority + 1;
			}
		},
		//unaware
		onAnyModifyBoost: function(boosts, target) {
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
		//filter
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug('Bawlky neutralize');
				return this.chainModify(0.75);
			}
		},
		//magic bounce
		onTryHitPriority: 1,
		onTryHit: function(target, source, move) {
			if (target === source || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			this.useMove(newMove, target, source);
			return null;
		},
		onAllyTryHitSide: function(target, source, move) {
			if (target.side === source.side || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			this.useMove(newMove, this.effectData.target, source);
			return null;
		},
		effect: {
			duration: 1,
		},
		//magic guard
		onDamage: function(damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				return false;
			}
		},
		//multiscale
		onSourceModifyDamage: function(damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				this.debug('Bawlky weaken');
				return this.chainModify(0.5);
			}
		},
	},
	"sunshine": {
		id: "sunshine",
		name: "Sunshine",
		//desolate land
		onStart: function(source) {
			this.setWeather('desolateland');
		},
		onAnySetWeather: function(target, source, weather) {
			if (this.getWeather().id === 'desolateland' && !(weather.id in {
					desolateland: 1,
					primordialsea: 1,
					deltastream: 1
				})) return false;
		},
		onEnd: function(pokemon) {
			if (this.weatherData.source !== pokemon) return;
			for (let i = 0; i < this.sides.length; i++) {
				for (let j = 0; j < this.sides[i].active.length; j++) {
					let target = this.sides[i].active[j];
					if (target === pokemon) continue;
					if (target && target.hp && target.hasAbility('desolateland')) {
						this.weatherData.source = target;
						return;
					}
				}
			}
			this.clearWeather();
		},
		//special huge power
		onModifySpAPriority: 5,
		onModifySpA: function(spa) {
			return this.chainModify(2);
		},
		//chlorrophyll
		onModifySpe: function(spe) {
			if (this.isWeather(['sunnyday', 'desolateland'])) {
				return this.chainModify(2);
			}
		},
		//unaware
		onAnyModifyBoost: function(boosts, target) {
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
	"memes": {
		id: "memes",
		name: "Memes",
		//huge power
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk) {
			return this.chainModify(2);
		},
		//adaptability
		onModifyMove: function(move) {
			move.stab = 2;
		},
		//unaware
		onAnyModifyBoost: function(boosts, target) {
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
		//mold breaker and air lock
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Air Lock');
			this.add('-ability', pokemon, 'Mold Breaker');
		},
	},
};
