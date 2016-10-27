'use strict';
/*eslint no-restricted-modules: [0]*/

let color = require('../config/color');
let moment = require('moment');

let BR = '<br>';
let SPACE = '&nbsp;';
let profileColor = '#24678d';
let trainersprites = [1, 2, 101, 102, 169, 170, 265, 266, 168];


/**
 * Profile constructor.
 *
 * @param {Boolean} isOnline
 * @param {Object|String} user - if isOnline then Object else String
 * @param {String} image
 */
function Profile(isOnline, user, image) {
	this.isOnline = isOnline || false;
	this.user = user || null;
	this.image = image;

	this.username = Chat.escapeHTML(this.isOnline ? this.user.name : this.user);
	this.url = Config.avatarurl || '';
}

/**
 * Create an bold html tag element.
 *
 * Example:
 * createFont('Hello World!');
 * => '<b>Hello World!</b>'
 *
 * @param {String} color
 * @param {String} text
 * @return {String}
 */
function bold(text) {
	return '<b>' + text + '</b>';
}

/**
 * Create an font html tag element.
 *
 * Example:
 * createFont('Hello World!', 'blue');
 * => '<font color="blue">Hello World!</font>'
 *
 * @param {String} color
 * @param {String} text
 * @return {String}
 */
function font(color, text) {
	return '<font color="' + color + '">' + text + '</font>';
}

/**
 * Create an img tag element.
 *
 * Example:
 * createImg('phil.png');
 * => '<img src="phil.png" height="80" width="80" align="left">'
 *
 * @param {String} link
 * @return {String}
 */
function img(link) {
	return '<img src="' + link + '" height="80" width="80">';
}

/**
 * Create a font html element wrap around by a bold html element.
 * Uses to `profileColor` as a color.
 * Adds a colon at the end of the text and a SPACE at the end of the element.
 *
 * Example:
 * label('Name');
 * => '<b><font color="#24678d">Name:</font></b> '
 *
 * @param {String} text
 * @return {String}
 */
function label(text) {
	return bold(font(profileColor, text + ':')) + SPACE;
}

function currencyName(amount) {
	let name = " buck";
	return amount === 1 ? name : name + "s";
}

Profile.prototype.avatar = function () {
	if (this.isOnline) {
		if (typeof this.image === 'string') return img('https://squad-server-gyaratoast.c9users.io/avatars/' + this.image);
		return img('http://play.pokemonshowdown.com/sprites/trainers/' + this.image + '.png');
	}
	for (let name in Config.customAvatars) {
		if (this.username === name) {
			console.log(Config.customAvatars[name]);
			return img('http://squad-server-gyaratoast.c9users.io/avatars/' + Config.customAvatars[name]);
		}
	}
	let selectedSprite = trainersprites[Math.floor(Math.random() * trainersprites.length)];
	return img('http://play.pokemonshowdown.com/sprites/trainers/' + selectedSprite + '.png');
};
Profile.prototype.buttonAvatar = function () {
	let css = 'border:none;background:none;padding:0;float:left;';
	return '<button style="' + css + '" name="parseCommand" value="/user ' + this.username + '">' + this.avatar() + "</button>";
};

Profile.prototype.group = function () {
	if (this.isOnline && this.user.group === ' ') return label('Group') + 'Regular User';
	if (this.isOnline) return label('Group') + Config.groups[this.user.group].name;
	for (let name in Users.usergroups) {
		if (toId(this.username) === name) {
			return label('Group') + Config.groups[Users.usergroups[name].charAt(0)].name;
		}
	}
	return label('Group') + 'Regular User';
};

Profile.prototype.money = function (amount) {
	return label('Money') + amount + currencyName(amount);
};

Profile.prototype.team = function (person) {
	
	let teamcss = 'float:right;border:none;background:none;';
	
		let noSprite = '<img src=http://play.pokemonshowdown.com/sprites/bwicons/0.png>';
	let one = Db('teams').get([person, 'one']);
	let two = Db('teams').get([person, 'two']);
	let three = Db('teams').get([person, 'three']);
	let four= Db('teams').get([person, 'four']);
	let five = Db('teams').get([person, 'five']);
	let six = Db('teams').get([person, 'six']);
	if(!Db('teams').has(person)) return '<div style="' + teamcss + '" >' + '<br>' + noSprite + noSprite + noSprite + '<br>' + noSprite + noSprite + noSprite + '</div>';
	function iconize(link){
		return '<button id="kek" name="send" value="/dt ' + link + '" style="background:transparent;border:none;"><img src=http://pldh.net/media/pokexycons/' + link + '.png></button>';
	}
	/*return '<div style="' + teamcss + '">' + '<br>' + iconize(one) + iconize(two) + iconize(three) + '<br>' + iconize(four) + iconize(five) + iconize(six) + '</div>';*/
	let teamDisplay = '<div style="' + teamcss + '">';
	if(Db('teams').has([person, 'one'])) {
		teamDisplay += iconize(one);
	} else {
		teamDisplay+= noSprite;
	}
	if(Db('teams').has([person, 'two'])) {
		teamDisplay += iconize(two);
	} else {
		teamDisplay+= noSprite;
	}
	if(Db('teams').has([person, 'three'])) {
		teamDisplay += iconize(three) + '<br>';
	} else {
		teamDisplay+= noSprite;
	}
	if(Db('teams').has([person, 'four'])) {
		teamDisplay += iconize(four);
	} else {
		teamDisplay+= noSprite;
	}
	if(Db('teams').has([person, 'five'])) {
		teamDisplay += iconize(five);
	} else {
		teamDisplay+= noSprite;
	}
	if(Db('teams').has([person, 'six'])) {
		teamDisplay += iconize(six);
	} else {
		teamDisplay+= noSprite;
	}
	
	teamDisplay+= '</div>';
	return teamDisplay;
};

Profile.prototype.pgo = function (kiddo) {
let team = Db('pgo').get(kiddo);
if(!Db('pgo').has(kiddo)) return label('Pokemon Go Team') + 'Not Set.';
	if(team === 'instinct'){
		team = '<font color="#cccc00"><b><i>Instinct</i></b></font>';
	}
		if(team === 'mystic'){
		team = '<font color="#3366cc"><b><i>Mystic</i></b></font>';
	}
		if(team === 'valor'){
		team = '<font color="#800000"><b><i>Valor</i></b></font>';
	}
		if(team === 'harmony'){
			team = '<font color="#cc00ff"><b>Harmony</i></b></font>';
	}
		if(team === 'none'){
			team = '<font color="#000000"><b>None</i></b></font>';
	}
return label('Pokemon Go Team') + team;
};


Profile.prototype.name = function () {
	let colorz = Db('customcolors').get(this.username);
	if(Db('customcolors').has(this.username)) return label('Name') + bold(font(colorz,this.username), this.username);
	return label('Name') + bold(font(color(toId(this.username)), this.username));
};

Profile.prototype.seen = function (timeAgo) {
	if (this.isOnline) return label('Last Seen') + '<font style="color:#2ECC40;"><b>Currently Online</b></font>';
	if (!timeAgo) return label('Last Seen') + 'Never';
	return label('Last Seen') + moment(timeAgo).fromNow();
};

Profile.prototype.dev = function (person) {
if(!Db('devs').has(person)) return '';
if(person === 'deathlyplays') return '<font color="#33ccff"><b>(Owner and YouTuber)</b></font> <font color="33ccff"><b>(Developer)</b></font>';
return '<font color="#3366cc"><b>(Developer)</b></font>';
};

Profile.prototype.title = function (person){
	let title = Db('titles').get(person);
	if(!Db('titles').has(person)) return '';
	return SPACE + title;
};

Profile.prototype.quote = function (person) { 
let quote = Db('quotes').get(person);
if(!Db('quotes').has(person)) return label('Quote') + 'This user does not have a quote set.';
return label('Quote') + '<b><i>"' + quote + '"</i></b>';
};

Profile.prototype.background = function (buddy) {
let bg = Db('backgrounds').get(buddy);
if(!Db('backgrounds').has(buddy)) return '<div>';
return '<div style="background:url(' + bg + ')">';
};

Profile.prototype.song = function (fren){
let song = Db('music').get([fren, 'link']);
let title = Db('music').get([fren, 'title'])
if(!Db('music').has(fren)) return '';
return '<acronym title="' + title + '"><br><audio src="' + song + '" controls="" style="width:100%;"></audio></acronym>';
};

Profile.prototype.badges = function (pal) {
	let badgecss = ';border:none;background:none;';
let badges = Db('badges').get(pal);
if(!Db('badges').has(pal) && Db('music').has(pal)) return '<br>';
let badgeDisplay = '<br><br><div style="' + badgecss +'"><center>' ;
if(!Db('badges').has(pal)) return '';
for (let i = 0; i < badges.length; i++){
	let img = Db('badgelist').get([badges[i], 'img']);
	let desc = Db('badgelist').get([badges[i], 'desc']);
	let id = Db('badgelist').get([badges[i], 'name'])
	badgeDisplay+= '<button name="send" style="background:transparent;border:none;" value="/badge info, ' + id + '"><img src="' + img + '" title="' + id + ' : ' + desc + '"></button>';
}
badgeDisplay+= '</center></div>';
return badgeDisplay;
};
Profile.prototype.show = function (callback) {
	let userid = toId(this.username);

	return this.background(userid) + this.buttonAvatar() + 
		SPACE + this.name() + this.title(userid) + this.team(userid) + BR +
		SPACE + this.group() + SPACE + this.dev(userid) + BR +
		SPACE + this.money(Db('money').get(userid, 0)) + BR +
		SPACE + this.seen(Db('seen').get(userid)) + BR +
		SPACE + this.pgo(userid) + BR + 
		SPACE + this.quote(userid)  + 
		SPACE + this.badges(userid) +
		this.song(userid) +

		'<br clear="all"></div>';
};
function hasUpperCase(msg) {
    return (/[A-Z]/.test(msg));
}

exports.commands = {
	profile: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (target.length >= 19) return this.sendReply("Usernames are required to be less than 19 characters long.");
		let targetUser = this.targetUserOrSelf(target);
		if(targetUser === 'constructor') return this.errorReply('nice meme.'); 
		let profile;
		if (!targetUser) {
			profile = new Profile(false, target);
		} else {
			profile = new Profile(true, targetUser, targetUser.avatar);
		}
		this.sendReplyBox(profile.show());
	},
	profilehelp: ["/profile -	Shows information regarding user's name, group, money, and when they were last seen."],
	addmon : 'addteam',
	addteam: function (target, room, user){
		if(!Db('hasteam').has(user.userid)) return this.errorReply('You dont have access to edit your team.');
		if(!target) return this.parse('/teamhelp');
		let parts = target.split(',');
		let mon = parts[1].trim();
		let slot = parts[0];
		if(!parts[1]) return this.parse('/teamhelp');
		let acceptable = ['one', 'two', 'three', 'four', 'five', 'six'];
		if(!acceptable.includes(slot)) return this.parse('/teamhelp');
		if(slot === 'one' || slot === 'two' || slot === 'three' || slot === 'four' || slot === 'five' || slot === 'six') {
		Db('teams').set([user.userid, slot], mon);
		this.sendReplyBox('You have added this pokemon to your team.');
		} else {
			return this.parse('/teamhelp');
		}
	},
	
	giveteam: function (target, room, user){
	if(!this.can('broadcast')) return false;
	if(!target) return this.errorReply('USAGE: /giveteam USER');
	let person = target.toLowerCase().trim();
	Db('hasteam').set(person, 1);
	this.sendReply(person + ' has been given the ability to set their team.');
	Users(person).popup('You have been given the abiltiy to set your profile team.');
	},
	taketeam: function (target, room, user){
	if(!this.can('broadcast')) return false;
	if(!target) return this.errorReply('USAGE: /take team USER');
	let person = target.toLowerCase().trim();
	if(!Db('hasteam').has(person)) return this.errorReply('This user does not have the ability to set their team.');
	Db('hasteam').delete(person);
	this.sendReply('this user has had their ability to change their team taken from them.');
		Users(person).popup('You have been stripped of your ability to set your team.');
	},
	
	teamhelp: function (target, room, user){
			if (!this.runBroadcast()) return;
			this.sendReplyBox('<center><b>Teams In Profiles - Coded By Execute.</b></center><br><br>' +
			'<b>/addmon (slot), (dex number) -</b >usage. The dex number must be the actual dex number of the pokemon you want.<br>' + 
			'FYI: Slot - we mean what slot you want the pokemon to be. valid entries for this are: one, two, three, four, five, six.<br>' +
			'Chosing the right slot is crucial because if you chose a slot that already has a pokemon, it will overwrite that data and replace it. This can be used to replace / reorder what pokemon go where.');
	},
	
	jointeam : function (target, room, user) { 
		let team = target;
		if(!team) return this.errorReply('INCORRECT USAGE. CORRECT USAGE: /jointeam (team name)');
		let teams = ['valor', 'mystic', 'instinct', 'harmony', 'none'];
		if(!teams.includes(target)) return this.errorReply('This is not a valid team. Choose Either Team Valor, Mystic, Instinct, Harmony, or None');
		Db('pgo').set(user.userid, team);
		this.sendReply('You have successfully joined ' + team);
	},
	
  title: function(target) {
        let parts = target.split(', ');
        if (!this.can('loclk')) return false;
        let user = parts[1];
        if (!user) return this.parse("/help title");
        if (!parts[0]) return this.parse("/help title");
        if (hasUpperCase(user) && parts[0] === 'set') { //Ensure the username isn't capitalized
           return this.parse("/title " + parts[0] + ", " + parts[1].toLowerCase() + ", " + parts[2] + ", " + parts[3]); // Re-Parse the command with the username lowercased
        	}
        
        switch(parts[0]) {
            case 'set': 
                let hex = parts[2];
                let text = parts[3];
                if (!hex || !text) return this.errorReply("Ensure you have set a title and hex");
                
                let title = '<font color = '+ hex + '><b>(' + text + ')</b></font>';
                if (Db('titles').has(user)) return false;
                Db('titles').set(user, title);
                Users(user).send('|popup| You have recieved a custom title');
                this.sendReply('|html|You have set the custom title');
                break;
            case 'delete':
                if (!Db('titles').has(user)) return false;
                Db('titles').delete(user);
                Users(user).send('|popup| Your custom title has been removed');
                this.sendReply("You have removed " + user + "s' custom title");
                break;
            default: 
                this.parse("/help title");
        }
    },
    titlehelp: ["/title set, user, hex, title - Sets a users title",
        "/title delete, user - Delets a users title."
    ],
	
	quote: function (target, room, user){
	if(!target) return this.errorReply('USAGE: /quote (quote)');
	Db('quotes').set(user.userid, target);
	this.sendReply('|html|Your quote has been set to : <b><i>' + target + '</i></b>');
	},
	'setbackground':'bg',
	setbg : function (target, room, user){
		if(!this.can('mute')) return false;
	let parts = target.split(',');
		if(!parts[1]) return this.errorReply('USAGE: /setbackground (user), (link)');
	let targ = parts[0].toLowerCase().trim();
	let link = parts[1].trim();
	Db('backgrounds').set(targ, link);
	this.sendReply('This users background has been set to : ');
	this.parse('/profile ' + targ);
	},
	'deletebackground': 'deletebg',
	deletebg: function (target, room, user){
		if(!this.can('mute')) return false;
		let targ = target.toLowerCase();
	if(!target) return this.errorReply('USAGE: /deletebackground (user)');
	if(!Db('backgrounds').has(targ)) return this.errorReply('This user does not have a custom background.');
	Db('backgrounds').delete(targ);
	this.sendReply('This users background has deleted.');
	},
	setmusic: function (target, room, user){
	if(!this.can('mute')) return false;
	let parts = target.split(',');
	let targ = parts[0].toLowerCase().trim();
	if(!parts[2]) return this.errorReply('USAGE: /setmusic (user), (link), (title)');
	let link = parts[1].trim();
	let title = parts[2].trim();
	Db('music').set([targ, 'link'], link);
	Db('music').set([targ, 'title'], title);
	this.sendReply(targ + '\'s song has been set to: ');
	this.parse('/profile ' + targ);
	},
	
	badge: function (target, room, user){
	let parts = target.split(',');
	let acceptable = ['set', 'take', 'delete', 'add', 'list', 'info'];
	if(!acceptable.includes(parts[0])) return this.parse('/badgehelp');
	switch (parts[0]) {
		case 'add':
			let id = parts[1].trim().toLowerCase();
			let name = parts[1].trim();
			let img = parts[2].trim();
			let desc = parts[3].trim();
			if(!parts[3]) return this.errorReply('USAGE: /badge add, (name), (img), Description.');
			if(Db('badgelist').has(id)) return this.errorReply('There is a badge with this name already.');
			Db('badgelist')
			.set([id, 'name'], name)
			.set([id, 'img'], img)
			.set([id, 'desc'], desc);
			let total = Db('badgelist').get('all');
			if(!Db('badgelist').has('all')) total = [];
			total.push(id);
			Db('badgelist').set('all', total);
			this.sendReplyBox('This badge has been successfully added.');
			break;
			case 'delete':
				let targbadge = parts[1].trim().toLowerCase();
				if(parts[2]) return this.errorReply('USAGE: /badge delete, (name)');
				if(!Db('badgelist').has(targbadge)) return this.errorReply('This badge does not exist.');
				Db('badgelist').delete(targbadge);
				let allbadgez = Db('badgelist').get('all');
				allbadgez = allbadgez.filter(b => b !== targbadge);
				Db('badgehlist').set('all', allbadgez);
				this.errorReply('This badge has been deleted.');
							let badgeUserObject = Db('userBadges').object();
			let users = Object.keys(badgeUserObject);
			users.forEach(u => Db('userBadges').set(u, (badgeUserObject[u].filter(b => b !== targbadge))));
				break;
				case 'set':
					let targUser = parts[1].trim().toLowerCase();
					let badge = parts[2].trim();
					if(!Db('badgelist').has(badge)) return this.errorReply('This badge does not exist.');
					if(!parts[2]) return this.errorReply('USAGE: /badge set, (user), (badge name)');
					let userBadges = Db('badges').get(targUser);
					if(!Db('badges').has(targUser)) userBadges = [];
					userBadges.push(badge);
					Db('badges').set(targUser, userBadges);
					let kekbadge = Db('badgelist').get([badge, 'img']);
					this.sendReply('This user has been succesfully given the ' + badge + ' badge.');
					Users(targUser).popup('|html|You have been given the <img src="' + kekbadge + '"> Badge.');
					break;
			case 'take':
				let usertarget = parts[1].trim().toLowerCase();
				let hasbadges = Db('badges').get(usertarget);
				let deletebadge = parts[2].trim().toLowerCase();
				let imgofbadge = Db('badgelist').get([deletebadge, 'img']);
				if(!parts[2]) this.errorReply('USAGE: /badge take, (user), (badge name).');
				hasbadges = hasbadges.filter(b => b !== deletebadge);
				Db('badges').set(usertarget, hasbadges);
				this.sendReply('This user has been stripped of the ' + deletebadge + ' badge.');
					Users(targUser).popup('|html|You have been stripped of the the ' +  imgofbadge + ' Badge.');
				break;
			case 'list':
				if (!this.runBroadcast()) return;
				let BadgeList = '<table border="1" width="100%" cellpadding="5px" cellspacing="0"><th>Badge Img</th><th>Badge Name</th><th>Badge Description</th>';
				let allbadges = Db('badgelist').get('all');
				for (let i = 0; i < allbadges.length; i++){
					let badgeimg = Db('badgelist').get([allbadges[i], 'img']);
					let badgedesc =Db('badgelist').get([allbadges[i], 'desc']);
					let badgename = Db('badgelist').get([allbadges[i], 'name']);
					BadgeList += '<tr>';
					BadgeList += '<td><center><button style="background:transparent;border:none;" name="send" value="/badge info, ' + badgename + '"><img src="' + badgeimg + '" title="' + badgename + ' : ' + badgedesc + '"></button></center></td>';
					BadgeList += '<td><b>' + badgename + '</b></td>';
					BadgeList += '<td>' + badgedesc + '</td>';
					BadgeList += '</tr>';
 			}
				this.sendReply('|html|' + BadgeList);
				break;
				case 'info':
						if (!this.runBroadcast()) return;
					if(!parts[1]) return this.errorReply('USAGE: /badge info, (badge name)');
					let infobadge = parts[1].trim().toLowerCase();
					let all = Db('badgelist').get('all');
					if(!all.includes(infobadge)) return this.errorReply('This badge does not exist.');
					let imginfo = Db('badgelist').get([infobadge, 'img']);
					let infodesc = Db('badgelist').get([infobadge, 'desc']);
					let infoname = Db('badgelist').get([infobadge, 'name']);
					this.sendReplyBox('<img src="' + imginfo + '">' + SPACE + infoname + ' : ' + infodesc);
					break;
	}
	},
	
	badgehelp: function (target, room, user){
	let display = '';
	display+= '<div class="infobox-limited"><center><b>Squad Badge Plugin By Execute.</b></center>';
	display+= '<b>/badgehelp</b> - Shows all the commands that are related to badges.<br>';
	display+= '<b>/badge add, (badge name), (badge image), (badge description)</b> - Adds a badge to the servers code.<br>';
	display+= '<b>/badge delete, (badge name)</b> - Deletes a badge from the server code.<br>';
	display+= '<b>/badge set, (user), (badge name)</b> - Gives a user a certain badge.<br>';
	display+= '<b>/badge take, (user), (badgename)</b< - Takes a badge from a user.<br>';
	display+= '<b>/badge list</b> - Shows all the servers badges.';
	this.sendReply('|html|' + display);
	},
	friendcode: function (target, room, user){
	if(!target) return this.errorReply('USAGE: /friendcode (code)');
	Db('friendcodes').set(user.userid, target);
	return this.sendReply('You have succesfully set your friend code to : ' + target);
	},
};
