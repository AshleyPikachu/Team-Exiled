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
	"encouragementstone": {
		spritenum: 307,
		id: "encouragementstone",
		name: "Encouragement Stone",
		num: -2,
		gen: -2,
		fling: {
			basePower: 40,
		},
		onModifyDamage: function (damage, source, target, move) {
			if (move && move.typeMod > 0) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onSwitchIn: function(pokemon) {
			this.boost({
				atk: 1
			});
		},
	},
};
