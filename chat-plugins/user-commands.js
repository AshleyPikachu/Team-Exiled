'use strict';
/********************
 * User Commands
 * This is where miscellaneous commands that any user can use go
********************/
const color = require('../config/color');
const Pokedex = require('../data/pokedex.js').BattlePokedex;
let messages = [
	"has vanished into nothingness!",
	"used Explosion!",
	"fell into the void.",
	"went into a cave without a repel!",
	"has left the building.",
	"was forced to give StevoDuhHero's mom an oil massage!",
	"was hit by Magikarp's Revenge!",
	"ate a bomb!",
	"is blasting off again!",
	"(Quit: oh god how did this get here i am not good with computer)",
	"was unfortunate and didn't get a cool message.",
	"{{user}}'s mama accidently kicked {{user}} from the server!",
];

function font(color, text) {
	return '<font color="' + color + '">' + text + '</font>';
}

function bold(text) {
	return '<b>' + text + '</b>';
}

let bubbleLetterMap = new Map([
	['a', '\u24D0'], ['b', '\u24D1'], ['c', '\u24D2'], ['d', '\u24D3'], ['e', '\u24D4'], ['f', '\u24D5'], ['g', '\u24D6'], ['h', '\u24D7'], ['i', '\u24D8'], ['j', '\u24D9'], ['k', '\u24DA'], ['l', '\u24DB'], ['m', '\u24DC'],
	['n', '\u24DD'], ['o', '\u24DE'], ['p', '\u24DF'], ['q', '\u24E0'], ['r', '\u24E1'], ['s', '\u24E2'], ['t', '\u24E3'], ['u', '\u24E4'], ['v', '\u24E5'], ['w', '\u24E6'], ['x', '\u24E7'], ['y', '\u24E8'], ['z', '\u24E9'],
	['A', '\u24B6'], ['B', '\u24B7'], ['C', '\u24B8'], ['D', '\u24B9'], ['E', '\u24BA'], ['F', '\u24BB'], ['G', '\u24BC'], ['H', '\u24BD'], ['I', '\u24BE'], ['J', '\u24BF'], ['K', '\u24C0'], ['L', '\u24C1'], ['M', '\u24C2'],
	['N', '\u24C3'], ['O', '\u24C4'], ['P', '\u24C5'], ['Q', '\u24C6'], ['R', '\u24C7'], ['S', '\u24C8'], ['T', '\u24C9'], ['U', '\u24CA'], ['V', '\u24CB'], ['W', '\u24CC'], ['X', '\u24CD'], ['Y', '\u24CE'], ['Z', '\u24CF'],
	['1', '\u2460'], ['2', '\u2461'], ['3', '\u2462'], ['4', '\u2463'], ['5', '\u2464'], ['6', '\u2465'], ['7', '\u2466'], ['8', '\u2467'], ['9', '\u2468'], ['0', '\u24EA'],
]);

let asciiMap = new Map([
	['\u24D0', 'a'], ['\u24D1', 'b'], ['\u24D2', 'c'], ['\u24D3', 'd'], ['\u24D4', 'e'], ['\u24D5', 'f'], ['\u24D6', 'g'], ['\u24D7', 'h'], ['\u24D8', 'i'], ['\u24D9', 'j'], ['\u24DA', 'k'], ['\u24DB', 'l'], ['\u24DC', 'm'],
	['\u24DD', 'n'], ['\u24DE', 'o'], ['\u24DF', 'p'], ['\u24E0', 'q'], ['\u24E1', 'r'], ['\u24E2', 's'], ['\u24E3', 't'], ['\u24E4', 'u'], ['\u24E5', 'v'], ['\u24E6', 'w'], ['\u24E7', 'x'], ['\u24E8', 'y'], ['\u24E9', 'z'],
	['\u24B6', 'A'], ['\u24B7', 'B'], ['\u24B8', 'C'], ['\u24B9', 'D'], ['\u24BA', 'E'], ['\u24BB', 'F'], ['\u24BC', 'G'], ['\u24BD', 'H'], ['\u24BE', 'I'], ['\u24BF', 'J'], ['\u24C0', 'K'], ['\u24C1', 'L'], ['\u24C2', 'M'],
	['\u24C3', 'N'], ['\u24C4', 'O'], ['\u24C5', 'P'], ['\u24C6', 'Q'], ['\u24C7', 'R'], ['\u24C8', 'S'], ['\u24C9', 'T'], ['\u24CA', 'U'], ['\u24CB', 'V'], ['\u24CC', 'W'], ['\u24CD', 'X'], ['\u24CE', 'Y'], ['\u24CF', 'Z'],
	['\u2460', '1'], ['\u2461', '2'], ['\u2462', '3'], ['\u2463', '4'], ['\u2464', '5'], ['\u2465', '6'], ['\u2466', '7'], ['\u2467', '8'], ['\u2468', '9'], ['\u24EA', '0'],
]);

function parseStatus(text, encoding) {
	if (encoding) {
		text = text.split('').map(function (char) {
			return bubbleLetterMap.get(char);
		}).join('');
	} else {
		text = text.split('').map(function (char) {
			return asciiMap.get(char);
		}).join('');
	}
	return text;
}

exports.commands = {
	chatcolour: 'chatcolor',
	chatcolor: function (target, room, user) {
		let group = user.getIdentity().charAt(0);
		if (room.auth) group = room.auth[user.userid] || group;
		if (user.hiding) group = ' ';
		let targets = target.split(',');
		if (targets.length < 2) return this.parse('/help chatcolor');
		if (!this.can('vip') || !this.canBroadcast()) return;
		if (!this.canTalk()) return this.errorReply("You may not use this command while unable to speak.");
		this.add('|raw|' + "<small>" + group + "</small>" + "<button name='parseCommand' value='/user " + user.name + "' style='background: none ; border: 0 ; padding: 0 5px 0 0 ; font-family: &quot;verdana&quot; , &quot;helvetica&quot; , &quot;arial&quot; , sans-serif ; font-size: 9pt ; cursor: pointer'><font color='" + user.name + "'>" + bold(font(color(user), user.name + ":</font></button>" + '<b><font color="' + targets[0].toLowerCase().replace(/[^#a-z0-9]+/g, '') + '">' + Chat.escapeHTML(targets.slice(1).join(",")) + '</font></b>')));
	},
	chatcolorhelp: ["/chatcolor OR /chatcolour [colour], [message] - Outputs a message in a custom colour. Requires VIP."],

			/* eslint-enable */
	helixfossil: 'm8b',
	helix: 'm8b',
	magic8ball: 'm8b',
	m8b: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let results = ['Signs point to yes.', 'Yes.', 'Reply hazy, try again.', 'Without a doubt.', 'My sources say no.', 'As I see it, yes.', 'You may rely on it.', 'Concentrate and ask again.', 'Outlook not so good.', 'It is decidedly so.', 'Better not tell you now.', 'Very doubtful.', 'Yes - definitely.', 'It is certain.', 'Cannot predict now.', 'Most likely.', 'Ask again later.', 'My reply is no.', 'Outlook good.', 'Don\'t count on it.'];
		return this.sendReplyBox(results[Math.floor(20 * Math.random())]);
	},
			/* eslint-enable */
	thefourthreplica: 'tfr',
	tfr: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let results = ['Here\'s some bright powder!', 'I sense a shiny in the near future, just keep trying!', 'If you\'re hungry, just eat some of your breedjects :D', 'BRIGHT POWDER!', 'Good luck!', '#ItsBreedingTime', '/pick is rigged!'];
		return this.sendReplyBox(results[Math.floor(7 * Math.random())]);
	},
	d: 'poof',
	cpoof: 'poof',
	poof: function (target, room, user) {
		if (Config.poofOff) return this.sendReply("Poof is currently disabled.");
		if (target && !this.can('broadcast')) return false;
		if (room.id !== 'lobby') return false;
		let message = target || messages[Math.floor(Math.random() * messages.length)];
		if (message.indexOf('{{user}}') < 0) message = '{{user}} ' + message;
		message = message.replace(/{{user}}/g, user.name);
		if (!this.canTalk(message)) return false;

		let colour = '#' + [1, 1, 1].map(function () {
			let part = Math.floor(Math.random() * 0xaa);
			return (part < 0x10 ? '0' : '') + part.toString(16);
		}).join('');

		room.addRaw("<strong><font color=\"" + colour + "\">~~ " + Chat.escapeHTML(message) + " ~~</font></strong>");
		user.disconnectAll();
	},
	poofhelp: ["/poof - Disconnects the user and leaves a message in the room."],

	randp: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let shinyPoke = "";
		let x;
		if (/shiny/i.test(target)) shinyPoke = "-shiny";
		if (/kanto/i.test(target) || /gen 1/i.test(target)) {
			x = Math.floor(Math.random() * (174 - 1));
		} else if (/johto/i.test(target) || /gen 2/i.test(target)) {
			x = Math.floor(Math.random() * (281 - 173)) + 172;
		} else if (/hoenn/i.test(target) || /gen 3/i.test(target)) {
			x = Math.floor(Math.random() * (444 - 280)) + 279;
		} else if (/sinnoh/i.test(target) || /gen 4/i.test(target)) {
			x = Math.floor(Math.random() * (584 - 443)) + 442;
		} else if (/kalos/i.test(target) || /gen 5/i.test(target)) {
			x = Math.floor(Math.random() * (755 - 583)) + 582;
		} else if (/unova/i.test(target) || /gen 6/i.test(target)) {
			x = Math.floor(Math.random() * (834 - 752)) + 751;
		}
		x = x || Math.floor(Math.random() * (856 - 1));
		let tarPoke = Object.keys(Pokedex)[x];
		let pokeData = Pokedex[tarPoke];
		let pokeId = pokeData.species.toLowerCase();
		pokeId = pokeId.replace(/^basculinbluestriped$/i, "basculin-bluestriped").replace(/^pichuspikyeared$/i, "pichu-spikyeared").replace(/^floetteeternalflower$/i, "floette-eternalflower");
		if (pokeId === "pikachu-cosplay") pokeId = ["pikachu-belle", "pikachu-phd", "pikachu-libre", "pikachu-popstar", "pikachu-rockstar"][~~(Math.random() * 6)];
		let spriteLocation = "http://play.pokemonshowdown.com/sprites/bw" + shinyPoke + "/" + pokeId + ".png";
		let missingnoSprites = ["http://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png", "http://cdn.bulbagarden.net/upload/0/03/Missingno_Y.png", "http://cdn.bulbagarden.net/upload/a/aa/Spr_1b_141_f.png", "http://cdn.bulbagarden.net/upload/b/bb/Spr_1b_142_f.png", "http://cdn.bulbagarden.net/upload/9/9e/Ghost_I.png"];
		if (pokeId === "missingno") spriteLocation = missingnoSprites[~~(Math.random() * 5)];
		function getTypeFormatting(types) {
			let text = [];
			for (let i = 0; i < types.length; i++) {
				text.push("<img src=\"http://play.pokemonshowdown.com/sprites/types/" + types[i] + ".png\" width=\"32\" height=\"14\">");
			}
			return text.join(" / ");
		}
		this.sendReplyBox("<table><tr><td><img src=\"" + spriteLocation + "\" height=\"96\" width=\"96\"></td><td><b>Name: </b>" + pokeData.species + "<br/><b>Type(s): </b>" + getTypeFormatting(pokeData.types) + "<br/><b>" + (Object.values(pokeData.abilities).length > 1 ? "Abilities" : "Ability") + ": </b>" + Object.values(pokeData.abilities).join(" / ") + "<br/><b>Stats: </b>" + Object.values(pokeData.baseStats).join(" / ") + "<br/><b>Colour: </b><font color=\"" + pokeData.color + "\">" + pokeData.color + "</font><br/><b>Egg Group(s): </b>" + pokeData.eggGroups.join(", ") + "</td></tr></table>");
	},
	serverhelp: function (target, room, user, connection) {
		if (!this.runBroadcast()) return;
		if (user.isStaff) {
			connection.sendTo(room.id, '|raw|<div class="infobox"><center><b><u>List of <i>staff</i> commands:</u></b></center><br /><b>/clearall</b> - Clear all messages in the room.<br /><b>/endpoll</b> - End the poll in the room.<br /><b>/givemoney</b> <i>name</i>, <i>amount</i> - Give a user a certain amount of money.<br /><b>/hide</b> - Hide your staff symbol.<br /><b>/pmall</b> <i>message</i> - Private message all users in the server.<br /><b>/pmstaff</b> <i>message</i> - Private message all staff.<br /><b>/poll</b> <i>question</i>, <i>option 1</i>, <i>option 2</i>... - Create a poll where users can vote on an option.<br /><b>/reload</b> - Reload commands.<br /><b>/reloadfile</b> <i>file directory</i> - Reload a certain file.<br /><b>/resetmoney</b> <i>name</i> - Reset the user\'s money to 0.<br /><b>/rmall</b> <i>message</i> - Private message all users in the room.<br /><b>/show</b> - Show your staff symbol.<br /><b>/strawpoll</b> <i>question</i>, <i>option 1</i>, <i>option 2</i>... - Create a strawpoll, declares the link to all rooms and pm all users in the server.<br /><b>/toggleemoticons</b> - Toggle emoticons on or off.<br /><b>/takemoney</b> <i>user</i>, <i>amount</i> - Take a certain amount of money from a user.<br /><b>/trainercard</b> <i>help</i> - Makes adding trainer cards EZ.<br /></div>');
		}
		if (!target || target === '1') {
			return this.sendReplyBox(
				"<center><b><u>List of commands (1/3):</u></b></center><br />" +
				"<b>/away</b> - Set yourself away.<br />" +
				"<b>/back</b> - Set yourself back from away.<br />" +
				"<b>/buy</b> <i>command</i> - Buys an item from the shop.<br />" +
				"<b>/customsymbol</b> <i>symbol</i> - Get a custom symbol.<br />" +
				"<b>/define</b> <i>word</i> - Shows the definition of a word.<br />" +
				"<b>/emotes</b> - Get a list of emoticons.<br />" +
				"<br />Use /cmds <i>number (1-3)</i> to see more commands."
			);
		}
		if (target === '2') {
			return this.sendReplyBox(
				"<center><b><u>List of commands (2/3):</u></b></center><br />" +
				"<b>/hangman</b> help - Help on hangman specific commands.<br />" +
				"<b>/poof</b> - Disconnects the user and leaves a message in the room.<br />" +
				"<b>/profile</b> - Shows information regarding user\'s name, group, money, and when they were last seen.<br />" +
				"<b>/regdate</b> <i>user</i> - Gets registration date of the user.<br />" +
				"<br />Use /cmds <i>number (1-3)</i> to see more commands."
			);
		}
		if (target === '3') {
			return this.sendReplyBox(
				"<center><b><u>List of commands (3/3):</u></b></center><br />" +
				"<b>/resetsymbol</b> - Reset custom symbol if you have one.<br />" +
				"<b>/richestusers</b> - Show the richest users.<br />" +
				"<b>/seen</b> <i>username</i> - Shows when the user last connected on the server.<br />" +
				"<b>/sell</b> <i>id</i> - Sells a card in the marketplace. Hover over your card to get the id.<br />" +
				"<b>/shop</b> - Displays the server\'s main shop.<br />" +
				"<b>/stafflist</b> - Shows the staff.<br />" +
				"<b>/tell</b> <i>username</i>, <i>message</i> - Send a message to an offline user that will be received when they log in.<br />" +
				"<b>/transfer</b> <i>user</i>, <i>amount</i> - Transfer a certain amount of money to a user.<br />" +
				"<b>/urbandefine</b> <i>word</i> - Shows the urban definition of the word.<br />" +
				"<b>/wallet</b> <i>user</i> - Displays how much money a user has. Parameter is optional.<br />" +
				"<br />Use /cmds <i>number (1-3)</i> to see more commands."
			);
		}
	},

	clobbyannounce: 'changeannounce',
	cannounce: 'changeannounce',
	changeannounce: function (target, room, user) {
		if (room.id !== "lobby") return false;
		if (!target) return false;
		if (!this.can('declare', null, room)) return false;
		this.parse('/roomintro ' + room.introMessage.split('<u>Announcements</u>: ')[0] + '<u>Announcements</u>: ' + target + ('</marquee></div>'));
	},

	fcadd: 'friendcodeadd',
	friendcodeadd: function (target, room, user) {
		if (!target) return this.errorReply("Invalid command. Valid commands are `/friendcodeadd code` and `/friendcoderemove`.");
		let fc = Chat.escapeHTML(target.trim());
		let reg = /^\d{4}-\d{4}-\d{4}$/;
		if (!reg.test(fc)) return this.errorReply("Invalid friend code, example: 3110-7818-5106");
		Db('FriencodeDB').set(toId(user), fc);
		this.sendReply("Friendcode set.");
	},

	fcrmv: 'friendcoderemove',
	fcdelete: 'friendcoderemove',
	friendcoderemove: function (target, room, user) {
		if (!Db('FriencodeDB').has(toId(user))) return this.errorReply("You do not have a friendcode.");
		Db('FriencodeDB').delete(toId(user));
		this.sendReply("Friendcode removed.");
	},

	anime: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!target) return this.errorReply("No target.");
		let targetAnime = Chat.escapeHTML(target.trim());
		let id = targetAnime.toLowerCase().replace(/ /g, '');
		if (amCache.anime[id]) return this.sendReply('|raw|' + amCache.anime[id]);

		nani.get('anime/search/' + targetAnime)
		.then(data => {
			if (data[0].adult) {
				return this.errorReply('Nsfw content is not allowed.');
			}
			nani.get('anime/' + data[0].id)
				.then(data => {
					let css = 'text-shadow: 1px 1px 1px #CCC; padding: 3px 8px;';
					let output = '<div class="infobox"><table width="100%"><tr>';
					let description = data.description.replace(/(\r\n|\n|\r)/gm, "").split('<br><br>').join('<br>');
					if (description.indexOf('&lt;br&gt;&lt;br&gt;') >= 0) description = description.substr(0, description.indexOf('&lt;br&gt;&lt;br&gt;'));
					if (description.indexOf('<br>') >= 0) description = description.substr(0, description.indexOf('<br>'));
					output += '<td style="' + css + ' background: rgba(170, 165, 215, 0.5); box-shadow: 2px 2px 5px rgba(170, 165, 215, 0.8); border: 1px solid rgba(170, 165, 215, 1); border-radius: 5px; color: #2D2B40; text-align: center; font-size: 15pt;"><b>' + data.title_romaji + '</b></td>';
					output += '<td rowspan="6"><img src="' + data.image_url_lge + '" height="320" width="225" alt="' + data.title_romaji + '" title="' + data.title_romaji + '" style="float: right; border-radius: 10px; box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(255, 255, 255, 0.5) inset;" /></td></tr>';
					output += '<tr><td style="' + css + '"><b>Genre(s): </b>' + data.genres + '</td></tr>';
					output += '<tr><td style="' + css + '"><b>Air Date: </b>' + data.start_date.substr(0, 10) + '</td></tr><tr>';
					output += '<tr><td style="' + css + '"><b>Status: </b>' + data.airing_status + '</td></tr>';
					output += '<tr><td style="' + css + '"><b>Episode Count: </b>' + data.total_episodes + '</td></tr>';
					output += '<tr><td style="' + css + '"><b>Rating: </b> ' + data.average_score + '/100</td></tr>';
					output += '<tr><td colspan="2" style="' + css + '"><b>Description: </b>' + description + '</td></tr>';
					output += '</table></div>';
					amCache.anime[id] = output;
					this.sendReply('|raw|' + output);
					room.update();
				});
		})
		.catch(error => {
			return this.errorReply("Anime not found.");
		});
	},

	manga: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!target) return this.errorReply("No target.");
		let targetAnime = Chat.escapeHTML(target.trim());
		let id = targetAnime.toLowerCase().replace(/ /g, '');
		if (amCache.anime[id]) return this.sendReply('|raw|' + amCache.anime[id]);

		nani.get('manga/search/' + targetAnime)
		.then(data => {
			nani.get('manga/' + data[0].id)
				.then(data => {
					let css = 'text-shadow: 1px 1px 1px #CCC; padding: 3px 8px;';
					let output = '<div class="infobox"><table width="100%"><tr>';
					for (let i = 0; i < data.genres.length; i++) {
						if (/(Hentai|Yaoi|Ecchi)/.test(data.genres[i])) return this.errorReply('Nsfw content is not allowed.');
					}
					let description = data.description.replace(/(\r\n|\n|\r)/gm, " ").split('<br><br>').join('<br>');
					if (description.indexOf('&lt;br&gt;&lt;br&gt;') >= 0) description = description.substr(0, description.indexOf('&lt;br&gt;&lt;br&gt;'));
					if (description.indexOf('<br>') >= 0) description = description.substr(0, description.indexOf('<br>'));
					output += '<td style="' + css + ' background: rgba(170, 165, 215, 0.5); box-shadow: 2px 2px 5px rgba(170, 165, 215, 0.8); border: 1px solid rgba(170, 165, 215, 1); border-radius: 5px; color: #2D2B40; text-align: center; font-size: 15pt;"><b>' + data.title_romaji + '</b></td>';
					output += '<td rowspan="6"><img src="' + data.image_url_lge + '" height="320" width="225" alt="' + data.title_romaji + '" title="' + data.title_romaji + '" style="float: right; border-radius: 10px; box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(255, 255, 255, 0.5) inset;" /></td></tr>';
					output += '<tr><td style="' + css + '"><b>Genre(s): </b>' + data.genres + '</td></tr>';
					output += '<tr><td style="' + css + '"><b>Release Date: </b>' + data.start_date.substr(0, 10) + '</td></tr><tr>';
					output += '<tr><td style="' + css + '"><b>Status: </b>' + data.publishing_status + '</td></tr>';
					output += '<tr><td style="' + css + '"><b>Chapter Count: </b>' + data.total_chapters + '</td></tr>';
					output += '<tr><td style="' + css + '"><b>Rating: </b> ' + data.average_score + '/100</td></tr>';
					output += '<tr><td colspan="2" style="' + css + '"><b>Description: </b>' + description + '</td></tr>';
					output += '</table></div>';
					amCache.manga[id] = output;
					this.sendReply('|raw|' + output);
					room.update();
				});
		})
		.catch(error => {
			return this.errorReply("Anime not found.");
		});
	},

	dimg: 'displayimage',
	displayimg: 'displayimage',
	displayimage: function (target, room, user) {
		let imgdisplay = '<div style="background: rgba(200, 200, 200, 0.7); padding: 15px 10px; box-shadow: 2px 2px 1px rgba(255, 255, 255, 0.5) inset, -1px -1px 1px rgba(0, 0, 0, 0.3) inset; border: 1px solid #666; border-radius: 6px;"><center><font color="' + color(user.userid) + '"><b>' + user.name + '</b></font> - <a href="' + target + '">' + target + '</a></center><br /><center><img src="' + target + '" /></center></div>';
		if (!room.isPrivate) {
			if (!this.can('declare')) return this.errorReply("/displayimage [link] - Can only be used by roommods or higher, except in private rooms.");
			if (!target) return this.sendReply('Usage: /displayimage [link]');
			this.add('|raw|' + imgdisplay);
		} else {
			if (!this.runBroadcast()) return;
			if (!target) return this.sendReply('Usage: /displayimage [link]');
			this.add('|raw|' + imgdisplay);
		}
	},
};
