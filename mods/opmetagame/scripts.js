'use strict';

exports.BattleScripts = {
	randomSeasonalMeleeTeam: function(side) {
		let userid = toId(side.name);
		let team = [];
		var variant = (this.random(2) === 1);
		var sets = {
			'Blissey': {
				species: 'Blissey',
				item: 'Choice Scarf',
				ability: 'Blissful',
				moves: ['psystrike', 'triattack', 'shadowball'],
				baseSignatureMove: 'Final Gambit',
				signatureMove: 'Final Gambit',
				evs: {
					hp: 252,
					spe: 252,
					def: 4
				},
				nature: 'Timid',
			},
			'Blissey 2.0': {
				species: 'Blissey',
				item: 'Choice Scarf',
				ability: 'Imposter',
				moves: ['recover', 'healbell', 'transform'],
				signatureMove: 'Tri Attack',
				evs: {
					hp: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Hasty',
			},
			'Slaking': {
				species: 'Slaking',
				item: 'Choice Band',
				ability: 'Huge Power',
				moves: ['return', 'knockoff', 'earthquake'],
				signatureMove: 'Explosion',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Adamant',
			},
			'Sunkern': {
				species: 'Sunkern',
				item: 'Focus Sash',
				ability: 'Sunshine',
				moves: ['solarbeam', 'earthpower', 'blueflare'],
				baseSignatureMove: 'supahawtmixtape',
				signatureMove: 'SUPA HAWT MIXTAPE',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Regigigas': {
				species: 'Regigigas',
				item: 'Life Orb',
				ability: 'Parental Bond',
				moves: ['psychocut', 'earthquake', 'knockoff'],
				signatureMove: 'Return',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Wynaut': {
				species: 'Wynaut',
				item: 'Eviolite',
				ability: 'Wynaut',
				moves: ['recover', 'transform', 'finalgambit'],
				signatureMove: 'Destiny Bond',
				evs: {
					hp: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Hasty',
			},
			'Sunflora': {
				species: 'Sunflora',
				item: 'Focus Sash',
				ability: 'Sunshine',
				moves: ['solarbeam', 'sunnyday', 'earthpower'],
				baseSignatureMove: 'flowergarden',
				signatureMove: 'Flower Garden',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Clefable': {
				species: 'Clefable',
				item: 'Power Herb',
				ability: 'Bawlky',
				moves: ['recover', 'geomancy', 'recycle'],
				signatureMove: 'Moonblast',
				evs: {
					hp: 248,
					def: 252,
					spd: 8
				},
				nature: 'Bold',
			},
			'Shedinja': {
				species: 'Shedinja',
				item: 'Lum Berry',
				ability: 'Sturdy',
				moves: ['shadowsneak', 'swordsdance', 'recycle'],
				signatureMove: 'Megahorn',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Sableye': {
				species: 'Sableye-Mega',
				item: 'Leftovers',
				ability: 'Bawlky',
				moves: ['recover', 'knockoff', 'toxic'],
				signatureMove: 'Cosmic Power',
				evs: {
					hp: 248,
					def: 252,
					spd: 8
				},
				nature: 'Bold',
			},
			'Excadrill': {
				species: 'Excadrill',
				item: 'Choice Scarf',
				ability: 'Mold Breaker',
				moves: ['precipiceblades', 'ironhead', 'stoneedge'],
				signatureMove: 'Knock Off',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Arceus': {
				species: 'Arceus',
				item: 'Life Orb',
				ability: 'Adaptability',
				moves: ['return', 'knockoff', 'precipiceblades'],
				signatureMove: 'Extreme Speed',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Shuckle': {
				species: 'Shuckle',
				item: 'Leftovers',
				ability: 'Bawlky',
				moves: ['gyroball', 'toxic', 'recover'],
				signatureMove: 'Cosmic Power',
				evs: {
					hp: 252,
					spd: 252,
					def: 4
				},
				nature: 'Sassy',
			},
			'Archeops': {
				species: 'Archeops',
				item: 'Choice Scarf',
				ability: 'Reckless',
				moves: ['headsmash', 'bravebird', 'knockoff'],
				signatureMove: 'Precipice Blades',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Gyarados': {
				species: 'Gyarados-Mega',
				item: 'Life Orb',
				ability: 'Adaptability',
				moves: ['waterfall', 'knockoff', 'dragonascent'],
				signatureMove: 'Sucker Punch',
				evs: {
					atk: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Jolly',
			},
			'Instinct': {
				species: 'Zapdos',
				item: 'Life Orb',
				ability: 'Serene Grace',
				moves: ['thunderbolt', 'flamethrower', 'voltswitch'],
				signatureMove: 'Hurricane',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Valor': {
				species: 'Moltres',
				item: 'Choice Scarf',
				ability: 'Serene Grace',
				moves: ['flamethrower', 'hurricane', 'seedflare'],
				baseSignatureMove: 'passengermode',
				signatureMove: 'Passenger Mode',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Mystic': {
				species: 'Articuno',
				item: 'Leftovers',
				ability: 'Multiscale',
				moves: ['freezedry', 'hurricane', 'recover'],
				signatureMove: 'Calm Mind',
				evs: {
					hp: 252,
					spd: 252,
					spa: 4
				},
				nature: 'Calm',
			},
			'Harmony': {
				species: 'Lugia',
				item: 'Leftovers',
				ability: 'Multiscale',
				moves: ['aeroblast', 'psystrike', 'recover'],
				signatureMove: 'Toxic',
				evs: {
					hp: 252,
					spd: 252,
					spa: 4
				},
				nature: 'Calm',
			},
			'Sunlight': {
				species: 'Ho-Oh',
				item: 'Leftovers',
				ability: 'Multiscale',
				moves: ['sacredfire', 'bravebird', 'precipiceblades'],
				signatureMove: 'Recover',
				evs: {
					atk: 252,
					hp: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Delta': {
				species: 'Rayquaza-Mega',
				item: 'Life Orb',
				ability: 'Contrary',
				moves: ['outrage', 'superpower', 'dragonascent'],
				signatureMove: 'Precipice Blades',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Landorus': {
				species: 'Landorus',
				item: 'Life Orb',
				ability: 'Sheer Force',
				moves: ['earthpower', 'hurricane', 'focusblast'],
				signatureMove: 'Ice Beam',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Darkness': {
				species: 'Yveltal',
				item: 'Life Orb',
				ability: 'Sheer Force',
				moves: ['hurricane', 'darkpulse', 'psychic'],
				signatureMove: 'Sucker Punch',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Giratina': {
				species: 'Giratina-Origin',
				item: 'Leftovers',
				ability: 'Serene Grace',
				moves: ['shadowball', 'dracometeor', 'sludgebomb'],
				signatureMove: 'Defog',
				evs: {
					hp: 244,
					spa: 252,
					spd: 14
				},
				nature: 'Modest',
			},
			'Thundurus': {
				species: 'Thundurus',
				item: 'Life Orb',
				ability: 'Serene Grace',
				moves: ['thunderbolt', 'hurricane', 'voltswitch'],
				signatureMove: 'Seed Flare',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Tornadus': {
				species: 'Tornadus-Therian',
				item: 'Life Orb',
				ability: 'Sheer Force',
				moves: ['hurricane', 'flamethrower', 'seedflare'],
				signatureMove: 'Knock Off',
				evs: {
					spa: 252,
					spe: 252,
					atk: 4
				},
				nature: 'Hasty',
			},
			'Gambler': {
				species: 'Blissey',
				item: 'Dice',
				ability: 'Risk',
				moves: ['recover', 'toxic', 'healbell'],
				baseSignatureMove: 'gamble',
				signatureMove: 'Gamble',
				evs: {
					spa: 252,
					hp: 252,
					atk: 4
				},
				nature: 'Modest',
			},
			'Sans': {
				species: 'Gengar',
				item: 'Life Orb',
				ability: 'People Like You Deserve to BURN IN HELL',
				moves: ['shadowball', 'psystrike', 'moonblast'],
				baseSignatureMove: 'badtime',
				signatureMove: 'Bad Time',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			"Christopher": {
				species: "Deoxys-Speed",
				ability: "No Guard",
				item: "Choice Scarf",
				gender: "M",
				moves: ['sheercold', 'horndrill', 'fissure'],
				baseSignatureMove: "murrinslash",
				signatureMove: "Murrin Slash",
				evs: {
					spe: 252,
					hp: 252,
					def: 4
				},
				nature: "Jolly",
			},
			"Miguel": {
				species: "Slaking",
				ability: "Huge Power",
				item: "Leftovers",
				gender: "M",
				moves: ['fakeout'],
				signatureMove: "Last Resort",
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: "Adamant",
			},
			"Hydreigon": {
				species: "Hydreigon",
				ability: "Contrary",
				item: "Choice Scarf",
				moves: ['overheat', 'psychoboost', 'dracometeor'],
				baseSignatureMove: "shade",
				signatureMove: "Shade",
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: "Timid",
			},
			"Pinsir": {
				species: "Pinsir-Mega",
				ability: "Sanik",
				item: "Flying Gem",
				moves: ['acrobatics', 'protect', 'earthquake'],
				signatureMove: "Extreme Speed",
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: "Jolly",
			},
			"Zekrom": {
				species: "Zekrom",
				ability: "Tough Claws",
				item: "Choice Band",
				moves: ['boltstrike', 'sacredfire', 'precipiceblades'],
				signatureMove: "Outrage",
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: "Adamant",
			},
			"Absol": {
				species: "Absol-Mega",
				ability: "Super Luck",
				item: "Life Orb",
				moves: ['psychocut', 'nightslash', 'crosspoison'],
				baseSignatureMove: "luckyprediction",
				signatureMove: "Lucky Prediction",
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: "Jolly",
			},
			"Missingno": {
				species: "Missingno",
				ability: "Memes",
				item: "Life Orb",
				moves: ['extremespeed', 'suckerpunch', 'machpunch'],
				baseSignatureMove: "error404",
				signatureMove: "ERROR 404",
				evs: {
					atk: 252,
					hp: 252,
					spd: 4
				},
				nature: "Adamant",
			},
		};

		let pool = Object.keys(sets);
		for (let i = 0; i < 6; i++) {
			let name = this.sampleNoReplace(pool);
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
