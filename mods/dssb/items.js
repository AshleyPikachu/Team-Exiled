'use strict';

exports.BattleItems = {
	"playniumz": {
		spritenum: 656,
		onTakeItem: false,
		id: "playniumz",
		name: "Playnium Z",
		zMove: "Exiled From All Others",
		zMoveFrom: "Aqua Subscribe",
		zMoveUser: ["Ludicolo"],
		num: -1,
		gen: -1,
		desc: "If holder is a Ludicolo with Aqua Subscribe, it can use Exiled From All Others.",
	},
	'encouragementstone': {
		spritenum: 307,
		id: "encouragementstone",
		name: "Encouragement Stone",
		num: -2,
		gen: -2,
		fling: {
			basePower: 40,
		},
		onModifyAtkPriority: 1,
		onModifyAtk: function(atk, pokemon) {
			if (pokemon.baseTemplate.baseSpecies === 'Kangaskhan' || pokemon.baseTemplate.baseSpecies === 'Kangaskhan-Mega') {
				return this.chainModify(1.5);
			}
		},
		onUpdate: function(pokemon) {
			this.boost({
				atk: 1
			});
		},
	},
};
