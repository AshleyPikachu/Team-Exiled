"use strict";
const ROOM_NAME = "Shadow Ban Room";
var room = Rooms.get(toId(ROOM_NAME));
if (!room) {
	Rooms.global.addChatRoom(ROOM_NAME);
	room = Rooms.get(toId(ROOM_NAME));

	room.isPrivate = true;
	room.staffRoom = true;
	room.addedUsers = {};

	if (room.chatRoomData) {
		room.chatRoomData.isPrivate = true;
		room.chatRoomData.staffRoom = true;
		room.chatRoomData.staffAutojoin = true;
		room.chatRoomData.addedUsers = room.addedUsers;

		Rooms.global.writeChatRoomData();
	}
}
if (Object.keys(room.addedUsers).length > 0) {
	setImmediate(function () {
		room.add("||Loaded user list: " + Object.keys(room.addedUsers).sort().join(", "));
		room.update();
	});
}
exports.room = room;

function getAllAlts(user) {
	var targets = {};
	if (typeof user === 'string') {
		targets[toId(user)] = 1;
	} else {
		user.getAlts().concat(user.name).forEach(function (altName) {
			var alt = Users.get(altName);
			if (!alt.named) return;

			targets[toId(alt)] = 1;
			Object.keys(alt.prevNames).forEach(function (name) {
				targets[toId(name)] = 1;
			});
		});
	}
	return targets;
}

function intersectAndExclude(a, b) {
	var intersection = [];
	var exclusionA = [];
	var exclusionB = [];

	var ai = 0;
	var bi = 0;
	while (ai < a.length && bi < b.length) {
		var difference = a[ai].localeCompare(b[bi]);
		if (difference < 0) {
			exclusionA.push(a[ai]);
			++ai;
		} else if (difference > 0) {
			exclusionB.push(b[bi]);
			++bi;
		} else {
			intersection.push(a[ai]);
			++ai;
			++bi;
		}
	}

	Array.prototype.push.apply(exclusionA, a.slice(ai));
	Array.prototype.push.apply(exclusionB, b.slice(bi));
	return {intersection: intersection, exclusionA: exclusionA, exclusionB: exclusionB};
}

var checkBannedCache = {};
var checkBanned = exports.checkBanned = function (user) {
	var userId = toId(user);
	if (userId in checkBannedCache) return checkBannedCache[userId];
	//console.log("Shadow ban cache miss:", userId);

	var targets = Object.keys(getAllAlts(user)).sort();
	var bannedUsers = Object.keys(room.addedUsers).sort();

	var matches = intersectAndExclude(targets, bannedUsers);
	var isBanned = matches.intersection.length !== 0;
	for (var t = 0; t < targets.length; ++t) {
		if (isBanned) room.addedUsers[targets[t]] = 1;
		checkBannedCache[targets[t]] = isBanned;
	}
	if (!isBanned) return false;

	if (matches.exclusionA.length > 0) {
		Rooms.global.writeChatRoomData();
		room.add("||Alts of " + matches.intersection[0] + " automatically added: " + matches.exclusionA.join(", "));
	}

	return true;
};

var addUser = exports.addUser = function (user) {
	var targets = getAllAlts(user);
	for (var u in targets) {
		if (room.addedUsers[u]) {
			delete targets[u];
		} else {
			room.addedUsers[u] = 1;
		}
		checkBannedCache[u] = true;
	}
	targets = Object.keys(targets).sort();

	if (targets.length > 0) {
		Rooms.global.writeChatRoomData();
		room.add("||Added users: " + targets.join(", "));
		room.update();
	}

	return targets;
};
var removeUser = exports.removeUser = function (user) {
	var targets = getAllAlts(user);
	for (var u in targets) {
		if (!room.addedUsers[u]) {
			delete targets[u];
		} else {
			delete room.addedUsers[u];
		}
		checkBannedCache[u] = false;
	}
	targets = Object.keys(targets).sort();

	if (targets.length > 0) {
		Rooms.global.writeChatRoomData();
		room.add("||Removed users: " + targets.join(", "));
		room.update();
	}

	return targets;
};

var addMessage = exports.addMessage = function (user, tag, message) {
	room.add('|c|' + user.getIdentity() + '|__(' + tag + ')__ ' + message);
	room.update();
};

exports.commands = {
	spam: 'shadowban',
	sban: 'shadowban',
	shadowban: function (target, room, user) {
		if (!target) return this.sendReply("/shadowban OR /sban [username], [secondary command], [reason] - Sends all the user's messages to the shadow ban room.");

		var params = this.splitTarget(target).split(',');
		var action = params[0].trim().toLowerCase();
		var reason = params.slice(1).join(',').trim();
		if (!(action in Chat.commands)) {
			action = 'mute';
			reason = params.join(',').trim();
		}

		if (!this.targetUser) return this.sendReply("User '" + this.targetUsername + "' not found.");
		if (!this.can('lock', this.targetUser)) return;

		var targets = addUser(this.targetUser);
		if (targets.length === 0) {
			return this.sendReply('||' + this.targetUsername + " is already shadow banned or isn't named.");
		}
		this.privateModCommand("(" + user.name + " has shadow banned: " + targets.join(", ") + (reason ? " (" + reason + ")" : "") + ")");

		//return this.parse('/' + action + ' ' + toId(this.targetUser) + ',' + reason);
	},

	unspam: 'unshadowban',
	unsban: 'unshadowban',
	unshadowban: function (target, room, user) {
		if (!target) return this.sendReply("/unshadowban OR /unsban [username] - Undoes /shadowban (except the secondary command).");
		this.splitTarget(target);

		if (!this.can('lock')) return;

		var targets = removeUser(this.targetUser || this.targetUsername);
		if (targets.length === 0) {
			return this.sendReply('||' + this.targetUsername + " is not shadow banned.");
		}
		this.privateModCommand("(" + user.name + " has shadow unbanned: " + targets.join(", ") + ")");
	},
	
	sbanlist: function (target, room, user, connection, cmd) {
		if (!user.can('lock')) return this.errorReply("The command '/" + cmd + "' was unrecognized. To send a message starting with '/" + cmd + "', type '//" + cmd + "'.");
		if (!this.canTalk()) return this.errorReply("You cannot do this while unable to speak.");
		let sbanList = {};

		// get target to lower case if there is one
		if (target) target = toId(target);

		// sort users by letter
		for (let u in Rooms.rooms.get("shadowbanroom").chatRoomData.addedUsers) {
			if (!sbanList[u.charAt(0)]) sbanList[u.charAt(0)] = {};
			sbanList[u.charAt(0)][u] = 1;
		}

		// create the buttons
		let buttons = "<center>" + Object.keys(sbanList).sort().map(l => {
			let colour = target === l ? "style=\"background-color:lightblue;height:30px;width:35px\"" : "style=\"background-color:aliceblue;height:30px;width:35px\"";
			return "<button name=\"send\" value=\"/sbanlist " + l + "\"" + colour + ">" + l.toUpperCase() + "</button>";
		}).join("&nbsp;");
		// add the no filter button
		buttons += "<br />" + // new line
			"<button name=\"send\" value=\"/sbanlist\" " + // command
			(target && sbanList.hasOwnProperty(target) ? "style=\"background-color:aliceblue;height:30px;width:90px\"" : "style=\"background-color:lightblue;height:30px;width:90px\"") +
			">All</button></center>";

		// create the full popup
		if (!target || target.length !== 1 || !sbanList.hasOwnProperty(target)) {
			let fullPopup = Object.keys(sbanList).sort().map(l => {
				return "<b>" + l.toUpperCase() + " -</b><br />" +
				Object.keys(sbanList[l]).sort().map(u => {
					let targetUser = Users.getExact(u);
					// bold online users
					return (targetUser && targetUser.connected ? "<b>" + u + "</b>" : u);
				}).join(", ") + "<br /><br />"; // contents for each letter
			}).join("");

			user.popup("|html|List of shadowbanned users:" +
				buttons + // buttons for searching
				"<div style=\"max-height: 300px; overflow-y: scroll\">" + // scrollable popup
				fullPopup + // the contents
				"</div>");
		} else {
			// create popup for only one letter
			let details = Object.keys(sbanList[target]).sort().map(u => {
				let targetUser = Users.getExact(u);
				// bold online users
				return (targetUser && targetUser.connected ? "<b>" + u + "</b>" : u);
			}).join(", ");
			user.popup("|html|List of shadowbanned users:" +
				buttons + // buttons for searching
				"<div style=\"max-height: 300px; overflow-y: scroll\">" + // scrollable popup
				"<b>" + target.toUpperCase() + " - </b><br />" +
				details + // the contents
				"</div>");
		}
	},
};

Users.ShadowBan = exports;
