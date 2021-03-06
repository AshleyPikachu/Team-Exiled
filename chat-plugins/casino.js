'use strict';
/********************
 * Casino
 * This file handles all money and casino related games
********************/

let color = require('../config/color');
let rankLadder = require('../rank-ladder');

let faces = {
	"sv": {
		name: "7",
		img: "http://cdn.bulbagarden.net/upload/f/f0/Celadon_Game_Corner_7_FRLG.png",
		payout: 500,
	},
	"ro": {
		name: "R",
		img: "http://cdn.bulbagarden.net/upload/5/5e/Celadon_Game_Corner_R_FRLG.png",
		payout: 250,
	},
	"pi": {
		name: "Pikachu",
		img: "http://cdn.bulbagarden.net/upload/1/16/Celadon_Game_Corner_Pikachu_FRLG.png",
		payout: 100,
	},
	"pd": {
		name: "Psyduck",
		img: "http://cdn.bulbagarden.net/upload/5/5b/Celadon_Game_Corner_Psyduck_FRLG.png",
		payout: 75,
	},
	"mg": {
		name: "Magnemite",
		img: "http://cdn.bulbagarden.net/upload/a/a2/Celadon_Game_Corner_Magnemite_FRLG.png",
		payout: 40,
	},
	"sh": {
		name: "Shellder",
		img: "http://cdn.bulbagarden.net/upload/e/e8/Celadon_Game_Corner_Shellder_FRLG.png",
		payout: 20,
	},
	"ch": {
		name: "Cherry",
		img: "http://cdn.bulbagarden.net/upload/2/2f/Celadon_Game_Corner_Cherry_FRLG.png",
		payout: 10,
	},
};

let faceMatch = function (hexValue) {
	let id = "0123456789abcdef".indexOf(hexValue);
	return ["ch", "ch", "ch", "ch", "sh", "sh", "sh", "mg", "mg", "pd", "pd", "pi", "pi", "ro", "ro", "sv"][id];
};

function slotsRolling(user, randNum) {
	return '|uhtml|' + user + randNum + '|' + '<center><div style="display: inline-block; background: #949698; border: 1px solid #000; border-radius: 2px; padding: 5px;"><table style="background: #3C3C3C; margin-right: auto; margin-left: auto; border: 1px solid #000; border-radius: 2px;" cellspacing="8"><tr><td style="padding-top: 4px; padding-bottom: 4px; border: 1px solid #AF8749; border-radius: 2px; background: -webkit-linear-gradient(#FDFDFD, #D7D7D7); background: -o-linear-gradient(#FDFDFD, #D7D7D7); background: -moz-linear-gradient(#FDFDFD, #D7D7D7); background: linear-gradient(#FDFDFD, #D7D7D7);"><img src="http://i.imgur.com/iwkVDUN.gif" height="24" width="32"></td><td style="padding-top: 4px; padding-bottom: 4px; border: 1px solid #AF8749; border-radius: 2px; background: -webkit-linear-gradient(#FDFDFD, #D7D7D7); background: -o-linear-gradient(#FDFDFD, #D7D7D7); background: -moz-linear-gradient(#FDFDFD, #D7D7D7); background: linear-gradient(#FDFDFD, #D7D7D7);"><img src="http://i.imgur.com/SubPUKp.gif" height="24" width="32"></td><td style="padding-top: 4px; padding-bottom: 4px; border: 1px solid #AF8749; border-radius: 2px; background: -webkit-linear-gradient(#FDFDFD, #D7D7D7); background: -o-linear-gradient(#FDFDFD, #D7D7D7); background: -moz-linear-gradient(#FDFDFD, #D7D7D7); background: linear-gradient(#FDFDFD, #D7D7D7);"><img src="http://i.imgur.com/JiIK7RI.gif" height="24" width="32"></td></tr></table></div><img src="http://i.imgur.com/Ry0uzS7.png?3"></center>';
}

function slotMachine(user, randNum, roll1, roll2, roll3) {
	return '|uhtmlchange|' + user + randNum + '|' + '<center><div style="display: inline-block; background: #949698; border: 1px solid #000; border-radius: 2px; padding: 5px;"><table style="background: #3C3C3C; margin-right: auto; margin-left: auto; border: 1px solid #000; border-radius: 2px;" cellspacing="8"><tr><td style="padding-top: 4px; padding-bottom: 4px; border: 1px solid #AF8749; border-radius: 2px; background: -webkit-linear-gradient(#FDFDFD, #D7D7D7); background: -o-linear-gradient(#FDFDFD, #D7D7D7); background: -moz-linear-gradient(#FDFDFD, #D7D7D7); background: linear-gradient(#FDFDFD, #D7D7D7);"><img src="' + roll1 + '" height="24" width="32"></td><td style="padding-top: 4px; padding-bottom: 4px; border: 1px solid #AF8749; border-radius: 2px; background: -webkit-linear-gradient(#FDFDFD, #D7D7D7); background: -o-linear-gradient(#FDFDFD, #D7D7D7); background: -moz-linear-gradient(#FDFDFD, #D7D7D7); background: linear-gradient(#FDFDFD, #D7D7D7);"><img src="' + roll2 + '" height="24" width="32"></td><td style="padding-top: 4px; padding-bottom: 4px; border: 1px solid #AF8749; border-radius: 2px; background: -webkit-linear-gradient(#FDFDFD, #D7D7D7); background: -o-linear-gradient(#FDFDFD, #D7D7D7); background: -moz-linear-gradient(#FDFDFD, #D7D7D7); background: linear-gradient(#FDFDFD, #D7D7D7);"><img src="' + roll3 + '" height="24" width="32"></td></tr></table></div><img src="http://i.imgur.com/Ry0uzS7.png?3"></center>';
}

function parseRoll(array) {
	let details = {};
	for (let i = 0; i < array.length; i++) {
		let tId = array[i];
		if (!details[tId]) details[tId] = 0;
		details[tId]++;
	}
	for (let id in details) {
		if (details[id] === 2) {
			return {
				match: "2",
				"id": id,
			};
		} else if (details[id] === 3) {
			return {
				match: "3",
				"id": id,
			};
		}
	}
	return {
		match: "1",
		id: null,
	};
}

let diceOne = function (dice) {
	dice = Math.floor(Math.random() * 6) + 1;
	return dice;
};

let diceTwo = function (dice) {
	dice = Math.floor(Math.random() * 6) + 1;
	return dice;
};

let rng = function (n) {
	n = Math.floor(Math.random() * 100);
	return n;
};

function isEven(n) {
	return n % 2 === 0;
}

function isOdd(n) {
	return Math.abs(n % 2) === 1;
}

exports.commands = {
	dicegame: 'startdice',
	dicestart: 'startdice',
	startdice: function (target, room, user) {
		if (!target) return this.parse('/help startdice');
		if (room.id !== 'dicehouse' && !room.isCasino) return this.errorReply("Dice games can't be used outside of Dice Rooms.");
		if (!this.can('broadcast', null, room)) return this.errorReply("You must be at least a voice to start a dice game.");
		if (room.id !== 'dicehouse' && target > 100) return this.errorReply("Dice can only be started for amounts less 100 tokens or less.");
		if (room.id === 'dicehouse' && target > 500) return this.errorReply("Dice can only be started for amounts less 500 tokens or less.");
		if (!this.canTalk()) return this.errorReply("You cannot start dice games while unable to speak.");

		let amount = isMoney(target);

		if (Db('money').get(user.userid, 0) < amount) return this.errorReply("You don't have enough tokens to start that dice game.");
		if (typeof amount === 'string') return this.sendReply(amount);
		if (!room.dice) room.dice = {};
		if (room.dice.started) return this.errorReply("A dice game has already started in this room.");

		room.dice.started = true;
		room.dice.bet = amount;
		room.dice.startTime = Date.now(); // Prevent ending a dice game too early.

		room.addRaw("<div class='infobox' style='background: rgba(190, 190, 190, 0.4); border-radius: 2px;'><div style='background: url(\"http://i.imgur.com/otpca0K.png?1\") left center no-repeat;'><div style='background: url(\"http://i.imgur.com/rrq3gEp.png\") right center no-repeat;'><center><h2 style='color: #444;'><font color='" + color(toId(this.user.name)) + "'>" + user.name + "</font> has started a dice game for <font style='color: #F00; text-decoration: underline;'>" + amount + "</font>" + currencyName(amount) + ".</h2></center><center><button name='send' value='/joindice' style='border: 1px solid #dcdcdc; -moz-box-shadow:inset 0px 1px 0px 0px #fff; -webkit-box-shadow:inset 0px 1px 0px 0px #fff; box-shadow:inset 0px 1px 0px 0px #fff; background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f9f9f9), color-stop(1, #e9e9e9)); background:-moz-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%); background:-webkit-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%); background:-o-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%); background:-ms-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%); background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%); filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#f9f9f9\", endColorstr=\"#e9e9e9\",GradientType=0); background-color:#f9f9f9; -moz-border-radius:6px; -webkit-border-radius:6px; border-radius:6px; display:inline-block; cursor:pointer; color:#666; font-family:Arial; font-size:15px; font-weight:bold; padding:6px 24px; text-decoration:none; text-shadow:0px 1px 0px #fff;'>Click to join.</button></center><br /></div></div></div>");
		this.parse('/joindice');
	},
	startdicehelp: ["/startdice [bet] - Start a dice game to gamble for money."],

	joindice: function (target, room, user) {
		if (!room.dice || (room.dice.p1 && room.dice.p2)) return this.errorReply("There is no dice game in it's signup phase in this room.");
		if (!this.canTalk()) return this.errorReply("You may not join dice games while unable to speak.");
		if (room.dice.p1 === user.userid) return this.errorReply("You already entered this dice game.");
		if (Db('money').get(user.userid, 0) < room.dice.bet) return this.errorReply("You don't have enough tokens to join this game.");
		Db('money').set(user.userid, Db('money').get(user.userid) - room.dice.bet);
		if (!room.dice.p1) {
			room.dice.p1 = user.userid;
			room.addRaw("<b>" + user.name + " has joined the dice game.</b>");
			return;
		}
		room.dice.p2 = user.userid;
		room.addRaw("<b>" + user.name + " has joined the dice game.</b>");
		let p1Number = Math.floor(6 * Math.random()) + 1, p2Number = Math.floor(6 * Math.random()) + 1;
		let output = "<div class='infobox'>Game has two players, starting now.<br>Rolling the dice.<br>" + room.dice.p1 + " has rolled a " + p1Number + ".<br>" + room.dice.p2 + " has rolled a " + p2Number + ".<br>";
		while (p1Number === p2Number) {
			output += "Tie... rolling again.<br>";
			p1Number = Math.floor(6 * Math.random()) + 1;
			p2Number = Math.floor(6 * Math.random()) + 1;
			output += room.dice.p1 + " has rolled a " + p1Number + ".<br>" + room.dice.p2 + " has rolled a " + p2Number + ".<br>";
		}
		let winner = room.dice[p1Number > p2Number ? 'p1' : 'p2'];
		output += "<font color=#24678d><b>" + winner + "</b></font> has won <font color=#24678d><b>" + room.dice.bet + "</b></font>" + currencyName(room.dice.bet) + ".<br>Better luck next time " + room.dice[p1Number < p2Number ? 'p1' : 'p2'] + "!</div>";
		room.addRaw(output);
		Db('money').set(winner, Db('money').get(winner, 0) + room.dice.bet * 2);
		if (room.id === 'dicehouse') Db('dicewins').set(winner, Db('dicewins').get(winner, 0) + 1);
		delete room.dice;
	},
	joindicehelp: ["/joindice - Joins a dice game."],

	enddice: function (target, room, user) {
		if (!user.can('broadcast', null, room)) return false;
		if (!room.dice) return this.errorReply("There is no dice game in this room.");
		if ((Date.now() - room.dice.startTime) < 15000 && !user.can('broadcast', null, room)) return this.errorReply("Regular users may not end a dice game within the first minute of it starting.");
		if (room.dice.p2) return this.errorReply("Dice game has already started.");
		if (room.dice.p1) Db('money').set(room.dice.p1, Db('money').get(room.dice.p1, 0) + room.dice.bet);
		delete room.dice;
		room.addRaw("<b>" + user.name + " ended the dice game.");
	},
	enddicehelp: ["/enddice - Ends a dice game. Requires +"],

	diceladder: 'dicegameladder',
	dicegameladder: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let keys = Object.keys(Db('dicewins').object()).map(function (name) {
			return {name: name, dicewins: Db('dicewins').get(name)};
		});
		if (!keys.length) return this.sendReplyBox("Dice ladder is empty.");
		keys.sort(function (a, b) { return b.dicewins - a.dicewins; });
		this.sendReplyBox(rankLadder('Dice Ladder', 'Wins', keys.slice(0, 100), 'dicewins'));
	},
	diceladderhelp: 'dicegameladderhelp',
	dicegameladderhelp: ["/diceladder - Shows the dice ladder."],

	dicewins: 'dicegamewins',
	dicegamewins: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!target) target = user.name;

		const targetId = toId(target);
		if (!targetId) return this.parse('/help dicewins');

		const dicewins = Db('dicewins').get(targetId, 0);
		this.sendReplyBox('<b><font color="' + color(targetId) + '">' + Chat.escapeHTML(target) + '</font></b> has ' + dicewins + ' dicewins.');
	},
	dicewinshelp: 'dicegamewinshelp',
	dicegamewinshelp: ["/dicewins [user] - Shows how many dice wins a user has."],

	resetdicewins: function (target, room, user) {
		if (!this.can('declare', null, room) || room.id !== 'casino') return false;
		let wins = Db('dicewins').object();
		Object.keys(wins)
		.filter(function (name) {
			return Db('dicewins').get(name);
		})
		.forEach(function (name) {
			delete wins[name];
		});
		Db.save();
		this.sendReply("The dice wins ladder has been reset.");
	},
	resetdicewinshelp: ["/resetdicewins - Resets the dice wins ladder."],
	bet: function (target, room, user) {
		let firstDice = diceOne();
		let secondDice = diceTwo();
		let totalDice = firstDice + secondDice;
		let house = rng();
		let choice = target.toUpperCase();
		let amount = Db('money').get(user.userid, 0);
		if (room.id !== 'dicehouse' && !~developers.indexOf(this.userid)) return this.errorReply("betting games can only be used in Dice House");
		if (amount < 2) return this.errorReply("You don't have enough tokens for the bet.");
		if (!target) return this.parse('/help bet');
		switch (choice) {
		case 'ODD':
			Db('money').set(user.userid, amount - 2).get(user.userid);
			if (isOdd(totalDice) && house < 87) {
				this.sendReply('|raw|<div class="infobox" style="background: rgba(190 , 190 , 190 , 0.4) ; border-radius: 2px"><div style="background: url(&quot;http://i.imgur.com/otpca0K.png?1&quot;) left center no-repeat"><div style="background: url(&quot;http://i.imgur.com/rrq3gEp.png&quot;) right center no-repeat"><font style="color: #666; font-style: italic;">' + user.name + ' betted on "' + choice + '".</font><center><h2 style="color: #444"><font color="' + color(toId(this.user.name)) + '">' + user.name + '</font>\'s both dices rolled a<br />total of <font style="color: #f00 ; text-decoration: underline">' + totalDice + '</font>.</h2></center><br /><center><h2 style="color: #444">You Win!!</h2></center></div></div></div>');
				Db('money').set(user.userid, amount + 2).get(user.userid);
			} else {
				this.sendReply('|raw|<div class="infobox" style="background: rgba(190 , 190 , 190 , 0.4) ; border-radius: 2px"><div style="background: url(&quot;http://i.imgur.com/otpca0K.png?1&quot;) left center no-repeat"><div style="background: url(&quot;http://i.imgur.com/rrq3gEp.png&quot;) right center no-repeat"><font style="color: #666; font-style: italic;">' + user.name + ' betted on "' + choice + '".</font><center><h2 style="color: #444"><font color="' + color(toId(this.user.name)) + '">' + user.name + '</font><center><h2 style="color: #444">You lose... better luck next time!</h2></center></div></div></div>');
			}
			break;
		case 'EVEN':
			Db('money').set(user.userid, amount - 2).get(user.userid);
			if (isEven(totalDice) && house < 87) {
				this.sendReply('|raw|<div class="infobox" style="background: rgba(190 , 190 , 190 , 0.4) ; border-radius: 2px"><div style="background: url(&quot;http://i.imgur.com/otpca0K.png?1&quot;) left center no-repeat"><div style="background: url(&quot;http://i.imgur.com/rrq3gEp.png&quot;) right center no-repeat"><font style="color: #666; font-style: italic;">' + user.name + ' betted on "' + choice + '".</font><center><h2 style="color: #444"><font color="' + color(toId(this.user.name)) + '">' + user.name + '</font>\'s both dices rolled a<br />total of <font style="color: #f00 ; text-decoration: underline">' + totalDice + '</font>.</h2></center><br /><center><h2 style="color: #444">You Win!!</h2></center></div></div></div>');
				Db('money').set(user.userid, amount + 2).get(user.userid);
			} else {
				this.sendReply('|raw|<div class="infobox" style="background: rgba(190 , 190 , 190 , 0.4) ; border-radius: 2px"><div style="background: url(&quot;http://i.imgur.com/otpca0K.png?1&quot;) left center no-repeat"><div style="background: url(&quot;http://i.imgur.com/rrq3gEp.png&quot;) right center no-repeat"><font style="color: #666; font-style: italic;">' + user.name + ' betted on "' + choice + '".</font><center><h2 style="color: #444"><font color="' + color(toId(this.user.name)) + '">' + user.name + '</font><center><h2 style="color: #444">You lose... better luck next time!</h2></center></div></div></div>');
			}
			break;
		case '7': case 'SEVEN':
			Db('money').set(user.userid, amount - 2).get(user.userid);
			if (totalDice === 7 && house < 70) {
				this.sendReply('|raw|<div class="infobox" style="background: rgba(190 , 190 , 190 , 0.4) ; border-radius: 2px"><div style="background: url(&quot;http://i.imgur.com/otpca0K.png?1&quot;) left center no-repeat"><div style="background: url(&quot;http://i.imgur.com/rrq3gEp.png&quot;) right center no-repeat"><font style="color: #666; font-style: italic;">' + user.name + ' betted on "' + choice + '".</font><center><h2 style="color: #444"><font color="' + color(toId(this.user.name)) + '">' + user.name + '</font>\'s both dices rolled a<br />total of <font style="color: #f00 ; text-decoration: underline">' + totalDice + '</font>.</h2></center><br /><center><h2 style="color: #444">You Win!!</h2></center></div></div></div>');
				Db('money').set(user.userid, amount + 14).get(user.userid);
			} else {
				this.sendReply('|raw|<div class="infobox" style="background: rgba(190 , 190 , 190 , 0.4) ; border-radius: 2px"><div style="background: url(&quot;http://i.imgur.com/otpca0K.png?1&quot;) left center no-repeat"><div style="background: url(&quot;http://i.imgur.com/rrq3gEp.png&quot;) right center no-repeat"><font style="color: #666; font-style: italic;">' + user.name + ' betted on "' + choice + '".</font><center><h2 style="color: #444"><font color="' + color(toId(this.user.name)) + '">' + user.name + '</font><center><h2 style="color: #444">You lose... better luck next time!</h2></center></div></div></div>');
			}
			break;
		default:
			this.errorReply("Not a valid bet.");
		}
	},
	bethelp: ["/bet [type] - rolls two dices and adds the two to make a final number. Choose between odd, even or seven. If you guess correctly you win tokens (betting for seven and winning awards more bucks)."],

	slots: {
		start: 'roll',
		roll: function (target, room, user) {
			if (room.id !== 'dicehouse' && !room.isCasino) return this.errorReply("Slots must be played in Dice Rooms.");
			if (room.slotsEnabled === false) return this.errorReply("Slots is currently disabled.");
			if (user.isRolling) return this.errorReply("Wait till your previous roll finishes to roll again");
			if (!room.slotsAnte) room.slotsAnte = 3;
			if (typeof room.slotsAnte === "string") room.slotsAnte = parseInt(room.slotsAnte);
			if (isNaN(room.slotsAnte)) room.slotsAnte = 3;
			if (room.slotsAnte > Db('money').get(user.userid, 0)) return this.sendReply("You do not have enough tokens to play slots.");
			Db('money').set(user.userid, Db('money').get(user.userid, 0) - room.slotsAnte);
			user.isRolling = true;

			//lets get a randomNumber from 0 - 4095
			let randRollTotal = ~~(Math.random() * 4096);
			let rollId = randRollTotal.toString(16);
			rollId = "000".slice(rollId.length) + rollId;
			let rollFaces = [];
			let rolls = [];
			rollId.split("").forEach(function (f) {
				rollFaces.push(faceMatch(f));
				rolls.push(faces[faceMatch(f)].img);
			}); //returns a character for each;
			//now that you have your three faces;
			//get the images for each;

			let randNum = Math.floor(Math.random() * 1000);
			let display = slotMachine(user, randNum, rolls[0], rolls[1], rolls[2]);
			let rollView = slotsRolling(user, randNum);
			user.sendTo(room, rollView);

			//get details on roll
			let rollDetails = parseRoll(rollFaces);

			setTimeout(function () {
				let win, winnings;
				user.sendTo(room, display);
				//odds for 2 in a row; fuck cherries they're too popular xD
				if (rollDetails.match === 2 && rollDetails.id !== "ch") {
					win = false;
					winnings = room.slotsAnte;
					Db('money').set(user.userid, Db('money').get(user.userid, 0) + winnings);
					user.isRolling = false;
					return user.sendTo(room, "You hit 2 " + faces[rollDetails.id].name + "'s and got your ante back.");
				}

				if (rollDetails.match === 3) {
					win = true;
					winnings = faces[rollDetails.id].payout + room.slotsAnte;
					if (rollDetails.id === "sv") {
						user.sendTo(room, "You've hit the jackpot!");
						room.addRaw('<h3> ' + user + ' has hit a Jackpot on the slots!</h3>');
					} else {
						user.sendTo(room, "You've won " + (winnings - room.slotsAnte) + " Bucks!");
					}
				} else {
					user.isRolling = false;
					return user.sendTo(room, "Better luck next time!");
				}
				if (win) {
					user.isRolling = false;
					Db('money').set(user.userid, Db('money').get(user.userid, 0) + winnings);
					logMoney(user + " won " + winnings + " from the slots.");
				}
			}, 3000);
		},

		enable: function (target, room, user, cmd) {
			if (room.id !== 'dicehouse' && !~developers.indexOf(this.userid)) return this.errorReply("Can only be used in Dice House.");
			if (!user.can('makechatroom')) return this.errorReply("/slots enable - Access denied.");
			room.slotsEnabled = true;
			this.sendReply("Slots has been enabled.");
		},

		disable: function (target, room, user, cmd) {
			if (room.id !== 'dicehouse' && !~developers.indexOf(this.userid)) return this.errorReply("Can only be used in Dice House.");
			if (!user.can('makechatroom')) return this.errorReply("/slots disable - Access denied.");
			room.slotsEnabled = false;
			if (room.chatRoomData) Rooms.global.writeChatRoomData();
			this.sendReply("Slots has been disabled.");
		},

		ante: function (target, room, user) {
			if (room.id !== 'dicehouse') return this.errorReply("Can only be used in DiceHouse.");
			if (!user.can('hotpatch')) return this.errorReply("/slots ante - Access denied.");
			if (!target) return this.parse('/help slotsante');
			target = parseInt(target);
			if (isNaN(target)) return this.errorReply("Must be a number, silly.");
			room.slotsAnte = target;
			if (room.chatRoomData) {
				room.chatRoomData.slotsAnte = room.slotsAnte;
				Rooms.global.writeChatRoomData();
			}
			this.sendReply("The ante for playing slots has been set to " + room.slotsAnte + ".");
		},
	},
	slotsantehelp: ["/slots ante [number] - Sets the ante for playing slots. Requires: ~"],
	slotsdisablehelp: ["/slots disable - Disable the playing of slots. Requires: ~"],
	slotsenablehelp: ["/slots enable - Enable the playing of slots. Requires: ~"],
	slotsrollhelp: ["/slots roll - Plays a game of dice after paying the ante. Must be played in casino."],
	slotshelp: ["commands for /slots are:",
		"/slots enable - Enable the playing of slots. Requires: ~",
		"/slots disable - Disable the playing of slots. Requires: ~",
		"/slots ante - Sets the ante for playing slots. Requires: ~",
		"/slots roll - Pay the ante and play a game of slots."],
};
