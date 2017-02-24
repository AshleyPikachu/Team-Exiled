/********************
 * Gym Roster
 * This file handles gym leader info
 ********************/


/*
'use strict';


class Gymleaders {
	constructor() {
		this.bug = ['open'];
		this.grass = ['open'];
		this.dark = ['open'];
		this.ground = ['open'];
		this.dragon = ['open'];
		this.ice = ['open'];
		this.electric = ['open'];
		this.normal = ['open'];
		this.fairy = ['open'];
		this.poison = ['open'];
		this.fighting = ['open'];
		this.psychic = ['open'];
		this.fire = ['open'];
		this.rock = ['open'];
		this.flying = ['open'];
		this.steel = ['open'];
		this.ghost = ['open'];
		this.water = ['open'];
	}
}

function bold(text) {
	return '<b>' + text + '</b>';
}

function gymDisplay(room) {
	for (let sg = 0; sg < data.length; sg++) {
	let data = Object.keys(room.gymleaders);
	let output = '<center><h4><u>' + room.title + ' Gym Leaders</u></h4></center><div style="width: 90%; max-height: 450px; overflow-y: scroll;"><table style="border-collapse: collapse; margin: auto;"><tr>';
	if (room.gymleaders[data[sg]][0] !== 'open') single = '<center><div class="infobox-limited"><table width="100%" border="3" style= "border: 3px dashed blue; background-color:black; "><tr><th style="border: 2px solid forestgreen; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: forestgreen ; border-radius: 12px"><font color="white">Bug</font></div> </th> <td style= "border: 2px solid forestgreen; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="forestgreen">Name: " + room.gymleaders[data[sg]][0] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><td style= "border: 2px solid green; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="green">Name: " + room.gymleaders[data[i]][1] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><th style="border: 2px solid green; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: green ; border-radius: 12px"><font color="white">Grass</font></div> </th></tr><!--|||--><tr></tr><tr></tr><tr><th style="border: 2px solid gray; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: gray ; border-radius: 12px"><font color="white">Dark</font></div> </th> <td style= "border: 2px solid gray; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="gray">Name: " + room.gymleaders[data[sg]][2] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><td style= "border: 2px solid sandybrown; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="sandybrown">Name: " + room.gymleaders[data[sg]][3] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><th style="border: 2px solid sandybrown; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: sandybrown ; border-radius: 12px"><font color="white">Ground</font></div> </th></tr><!--|||--><tr></tr><tr></tr><tr><th style="border: 2px solid navy; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: navy ; border-radius: 12px"><font color="white">Dragon</font></div> </th> <td style= "border: 2px solid navy; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="navy">Name: " + room.gymleaders[data[sg]][4] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><td style= "border: 2px solid cyan; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="cyan">Name: " + room.gymleaders[data[sg]][5] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><th style="border: 2px solid cyan; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: cyan ; border-radius: 12px"><font color="white">Ice</font></div> </th></tr><!--|||--><tr></tr><tr></tr><tr><th style="border: 2px solid yellow; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: yellow ; border-radius: 12px"><font color="white">Electric</font></div> </th> <td style= "border: 2px solid yellow; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="yellow">Name: " + room.gymleaders[data[sg]][6] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><td style= "border: 2px solid silver; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="silver">Name: " + room.gymleaders[data[sg]][7] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><th style="border: 2px solid silver; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: silver ; border-radius: 12px"><font color="white">Normal</font></div> </th></tr><!--|||--><tr></tr><tr></tr><tr><th style="border: 2px solid pink; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: pink ; border-radius: 12px"><font color="white">Fairy</font></div> </th> <td style= "border: 2px solid pink; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="pink">Name: " + room.gymleaders[data[sg]][8] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><td style= "border: 2px solid purple; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="purple">Name: " + room.gymleaders[data[sg]][9] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><th style="border: 2px solid purple; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: purple ; border-radius: 12px"><font color="white">Poison</font></div> </th></tr><!--|||--><tr></tr><tr></tr><tr><th style="border: 2px solid brown; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: brown ; border-radius: 12px"><font color="white">Fighting</font></div> </th> <td style= "border: 2px solid brown; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="brown">Name: " + room.gymleaders[data[sg]][10] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><td style= "border: 2px solid magenta; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="magenta">Name: " + room.gymleaders[data[sg]][11] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><th style="border: 2px solid magenta; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: magenta ; border-radius: 12px"><font color="white">Psychic</font></div> </th></tr><!--|||--><tr></tr><tr></tr><tr><th style="border: 2px solid red; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: red ; border-radius: 12px"><font color="white">Fire</font></div> </th> <td style= "border: 2px solid red; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="red">Name: " + room.gymleaders[data[sg]][12] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><td style= "border: 2px solid arkkhaksi; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="arkkhaksi">Name: " + room.gymleaders[data[sg]][13] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><th style="border: 2px solid arkkhaksi; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: arkkhaksi ; border-radius: 12px"><font color="white">Rock</font></div> </th></tr><!--|||--><tr></tr><tr></tr><th style="border: 2px solid skyblue; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: skyblue ; border-radius: 12px"><font color="white">Flying</font></div> </th> <td style= "border: 2px solid skyblue; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="skyblue">Name: " + room.gymleaders[data[sg]][14] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><td style= "border: 2px solid silver; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="silver">Name: " + room.gymleaders[data[sg]][15] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><th style="border: 2px solid silver; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: silver ; border-radius: 12px"><font color="white">Steel</font></div> </th></tr><!--|||--><tr></tr><tr></tr><th style="border: 2px solid indigo; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: indigo ; border-radius: 12px"><font color="white">Ghost</font></div> </th> <td style= "border: 2px solid indigo; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="indigo">Name: " + room.gymleaders[data[sg]][16] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><td style= "border: 2px solid lightblue; padding: 5px; background: black; border-radius: 3px; width: 15%;"><font color="lightblue">Name: " + room.gymleaders[data[sg]][17] + "<br>Ace: " + ace + "<br>Badge: " + badgename + "</font></td></th><th style="border: 2px solid lightblue; padding: 5px; background: black; border-radius: 3px; width: 3%;"> <div style="padding: 6px ; background-color: lightblue ; border-radius: 12px"><font color="white">Water</font></div> </th></tr><!--|||--><tr></tr><tr></tr></table></div></center>';
    return output;
}

exports.commands = {
	gyms: 'gym',
	gym: {
		list: 'leaders',
		leaders: function (target, room, user) {
			if (!this.runBroadcast()) return;
			if (!room.gymleaders) return this.sendReplyBox("This room has no gym leaders set.");
			let display = gymDisplay(room);
			this.sendReply("|raw|" + display);
		},
		add: function (target, room, user) {
			if (!this.can('declare', null, room)) return false;
			if (!room.chatRoomData.gymleaders) room.gymleaders = room.chatRoomData.gymleaders = new Gymleaders();
			let parts = target.split(',');
			let position = 0;
			if (parts.length < 2) return this.errorReply("You must specify a type and user.");
			let type = toId(parts[0]);
			let gymLeader = toId(parts[1]);
			if (!room.gymleaders[type]) return this.errorReply("Type: " + type + " not found. Did you spell it correctly?");
			if (gymLeader.length >= 19) return this.sendReply("Usernames are required to be less than 19 characters long.");
			if (room.gymleaders[type][0] !== 'open' && room.gymleaders[type][1] !== 'open') return this.errorReply("These gym leader positions are already filled. Use /gym replace to remove them and add a new leader.");
			if (room.gymleaders[type][0] !== 'open') position = 1;
			room.gymleaders[type][position] = gymLeader;
			room.chatRoomData.gymleaders[type][position] = gymLeader;
			Rooms.global.writeChatRoomData();
			room.add(gymLeader + " has been appointed as the " + type + " gym leader for this league by " + user + ".");
		},
		delete: 'remove',
		remove: function (target, room, user) {
			if (!this.can('declare', null, room)) return false;
			let parts = target.split(',');
			let type = toId(parts[0]);
			let position = 0;
			if (parts.length < 2) return this.errorReply("You must specify a type and user.");
			let gymLeader = toId(parts[1]);
			if (!room.gymleaders) return this.errorReply("This room has no gym leaders set.");
			if (!room.gymleaders[type]) return this.errorReply("Type: " + type + " not found. Did you spell it correctly?");
			if (room.gymleaders[type][0] === 'open' && room.gymleaders[type][1] === 'open') return this.errorReply("All gym leader positions for this type are already open.");
			if (room.gymleaders[type][0] !== gymLeader) position = 1;
			room.gymleaders[type][position] = 'open';
			room.chatRoomData.gymleaders[type][position] = 'open';
			Rooms.global.writeChatRoomData();
			this.addModCommand("(" + gymLeader + " has been removed from the position of" + type + " gym leader by " + user + ".)");
		},
		replace: function (target, room, user) {
			if (!this.can('declare', null, room)) return false;
			if (!room.gymleaders) return this.errorReply("This room has no gym leaders set.");
			let parts = target.split(',');
			if (parts.length < 3) return this.errorReply("You must specify a type and user.");
			let type = toId(parts[0]);
			let gymLeader = toId(parts[1]);
			let newLeader = toId(parts[2]);
			let position = 0;
			if (gymLeader.length >= 19 || newLeader.length >= 19) return this.sendReply("Usernames are required to be less than 19 characters long.");
			if (!room.gymleaders[type]) return this.errorReply("Type: " + type + " not found. Did you spell it correctly?");
			if (room.gymleaders[type][0] === 'open' && room.gymleaders[type][1] === 'open') return this.errorReply("All gym leader positions for this type are already open.");
			if (room.gymleaders[type][0] !== gymLeader) position = 1;
			room.gymleaders[type][position] = newLeader;
			room.chatRoomData.gymleaders[type][position] = newLeader;
			Rooms.global.writeChatRoomData();
			room.add(newLeader + " has been appointed as the " + type + " gym leader for this league by " + user + ".");
		},
		'': 'help',
		help: function (target, room, user) {
			if (!this.runBroadcast()) return;
			this.sendReplyBox('The following is a list of gym roster commands: <br />' +
				'/gym leaders/list - Shows a complete list of gym leaders in a league.<br />' +
				'/gym add [type], [user], [ace], [badgename] - Appoints a user as a gym leader for a type.<br />' +
				'/gym delete/remove [type], [user], [ace], [badgename] - Removes a user as a gym leader from a type.<br />' +
				'/gym delete/remove [type], [user], [ace], [badgename] - Removes a user as a gym leader from a type.<br />' +
				'/gym replace [type], [user], [ace], [badgename], [old user], [new user] - Replaces a gym leader of a type with a new gym leader.'
			);
		},
	},
};
*/
