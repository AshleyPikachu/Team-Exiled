'use strict';

exports.BattlePokedex = {
	botamon: {
		num: 1,
		species: "Botamon",
		types: ["Fire"],
		baseStats: {
			hp: 350,
			atk: 100,
			def: 50,
			spa: 100,
			spd: 50,
			spe: 50
		},
		abilities: {
			0: "Data"
		},
		weightkg: 2.3,
		color: "Black",
		evos: ["Koromon"],
	},
	poyomon: {
		num: 2,
		species: "Poyomon",
		types: ["Air"],
		baseStats: {
			hp: 350,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 50
		},
		abilities: {
			0: "Data"
		},
		weightkg: 2.3,
		color: "White",
		evos: ["Tokomon"],
	},
	punimon: {
		num: 3,
		species: "Punimon",
		types: ["Air"],
		baseStats: {
			hp: 350,
			atk: 50,
			def: 100,
			spa: 50,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Data"
		},
		weightkg: 2.3,
		color: "Red",
		evos: ["Tsunomon"],
	},
	yuramon: {
		num: 4,
		species: "Yuramon",
		types: ["Earth"],
		baseStats: {
			hp: 550,
			atk: 50,
			def: 50,
			spa: 50,
			spd: 50,
			spe: 50
		},
		abilities: {
			0: "Data"
		},
		weightkg: 2.3,
		color: "White",
		evos: ["Tanemon"],
	},
	koromon: {
		num: 5,
		species: "Koromon",
		types: ["Fire", "Battle"],
		baseStats: {
			hp: 500,
			atk: 100,
			def: 50,
			spa: 100,
			spd: 50,
			spe: 50
		},
		abilities: {
			0: "Data"
		},
		weightkg: 4.5,
		color: "Pink",
		evos: ["Agumon", "Gabumon", "Kunemon"],
		prevo: ["Botamon"],
	},
	tokomon: {
		num: 6,
		species: "Tokomon",
		types: ["Air", "Battle"],
		baseStats: {
			hp: 500,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 50
		},
		abilities: {
			0: "Data"
		},
		weightkg: 4.5,
		color: "White",
		evos: ["Patamon", "Biyomon", "Kunemon"],
		prevos: ["Poyomon"],
	},
	tsunomon: {
		num: 7,
		species: "Tsunomon",
		types: ["Air", "Ice"],
		baseStats: {
			hp: 500,
			atk: 50,
			def: 100,
			spa: 50,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Data"
		},
		weightkg: 4.5,
		color: "Brown",
		evos: ["Elecmon", "Penguinmon", "Kunemon"],
		prevos: ["Punimon"],
	},
	tanemon: {
		num: 8,
		species: "Tanemon",
		types: ["Earth", "Ice"],
		baseStats: {
			hp: 700,
			atk: 50,
			def: 50,
			spa: 50,
			spd: 50,
			spe: 50
		},
		abilities: {
			0: "Data"
		},
		weightkg: 4.5,
		color: "Green",
		evos: ["Palmon", "Betamon", "Kunemon"],
		prevos: ["Yuramon"],
	},
	agumon: {
		num: 9,
		species: "Agumon",
		types: ["Fire", "Battle"],
		baseStats: {
			hp: 1000,
			atk: 200,
			def: 100,
			spa: 200,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 6.8,
		color: "Yellow",
		evo: ['birdramon', 'centarumon', 'greymon', 'meramon', 'monochromon', 'tyrannomon'],
		prevo: ["koromon"],
	},
	gabumon: {
		num: 10,
		species: "Gabumon",
		types: ["Battle", "Fire"],
		baseStats: {
			hp: 1000,
			atk: 100,
			def: 200,
			spa: 100,
			spd: 200,
			spe: 200
		},
		abilities: {
			0: "Data"
		},
		weightkg: 6.8,
		color: "White",
		evo: ['centarumon', 'drimogemon', 'garurumon', 'monochromon', 'ogremon', 'tyrannomon'],
		prevo: ["koromon"],
	},
	patamon: {
		num: 11,
		species: "Patamon",
		types: ["Air", "Battle"],
		baseStats: {
			hp: 1200,
			atk: 200,
			def: 200,
			spa: 200,
			spd: 200,
			spe: 100
		},
		abilities: {
			0: "Data"
		},
		weightkg: 6.8,
		color: "Brown",
		evo: ['angemon', 'leomon', 'ogremon', 'unimon', 'ogremon'],
		prevo: ["tokomon"],
	},
	elecmon: {
		num: 12,
		species: "Elecmon",
		types: ["Air", "Battle"],
		baseStats: {
			hp: 1000,
			atk: 200,
			def: 100,
			spa: 200,
			spd: 100,
			spe: 200
		},
		abilities: {
			0: "Data"
		},
		weightkg: 6.8,
		color: "Red",
		evo: ['angemon', 'leomon', 'ogremon', 'kokatorimon'],
		prevo: ["tsunomon"],
	},
	biyomon: {
		num: 13,
		species: "Biyomon",
		types: ["Air", "Fire"],
		baseStats: {
			hp: 1000,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 200
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 6.8,
		color: "Pink",
		evo: ['airdramon', 'birdramon', 'kabuterimon', 'kokatorimon', 'Unimon'],
		prevo: ["tokomon"],
	},
	kunemon: {
		num: 14,
		species: "Kunemon",
		types: ["Earth", "Air"],
		baseStats: {
			hp: 1000,
			atk: 200,
			def: 100,
			spa: 200,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Virus"
		},
		weightkg: 6.8,
		color: "Yellow",
		evo: ['kabuterimon', 'kuwagamon', 'vegiemon'],
		prevo: ["koromon", "tokomon", "tsunomon", "tanemon"],
	},
	palmon: {
		num: 15,
		species: "Palmon",
		types: ["Earth", "Ice"],
		baseStats: {
			hp: 1200,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 6.8,
		color: "Green",
		evo: ['coelamon', 'kuwagamon', 'ninjamon', 'vegiemon', 'whamon'],
		prevo: ["tanemon"],
	},
	betamon: {
		num: 16,
		species: "Betamon",
		types: ["Ice", "Earth"],
		baseStats: {
			hp: 1000,
			atk: 100,
			def: 200,
			spa: 100,
			spd: 200,
			spe: 100
		},
		abilities: {
			0: "Virus"
		},
		weightkg: 6.8,
		color: "Green",
		evo: ['coelamon', 'drimogemon', 'seadramon', 'shellmon', 'whamon'],
		prevo: ["tanemon"],
	},
	penguimon: {
		num: 16,
		species: "Penguimon",
		types: ["Ice", "Earth"],
		baseStats: {
			hp: 1200,
			atk: 100,
			def: 200,
			spa: 100,
			spd: 200,
			spe: 100
		},
		abilities: {
			0: "Data"
		},
		weightkg: 6.8,
		color: "Blue",
		evo: ['fridgimon', 'garurumon', 'mojaymon', 'shellmon', 'whamon'],
		prevo: ["tsunomon"],
	},
};
