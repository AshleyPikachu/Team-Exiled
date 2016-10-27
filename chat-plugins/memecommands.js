'use strict';

exports.commands = {
    eat: function (target, room, User) {
		if (!target) return this.sendReply('/eat needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has eaten  ' + target + '!');
		targetUser.popup("You just got eaten!!!!!!!!!!");
    },
    murder: function (target, room, User) {
		if (!target) return this.sendReply('/murder needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has murdered  ' + target + '!');
		targetUser.popup("WASTED!");
    },
    foh: function (target, room, User) {
		if (!target) return this.sendReply('/foh needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has just told  ' + target + ' to get the fuck outta here!');
		targetUser.popup("GET THE FUCK OUTTA HERE BOI!");
    },
    hid: function (target, room, User) {
		if (!target) return this.sendReply('/hid needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has hid behind ' + target + '.');
    },
    idgaf: function (target, room, User) {
		if (!target) return this.sendReply('/idgaf needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' doesn\'t give a fuck about  ' + target + '!');
		targetUser.popup("Idgaf!");
    },
    slap: function (target, room, User) {
		if (!target) return this.sendReply('/slap needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has slapped  ' + target + ' in the face with a house slipper.');
		targetUser.popup("You just got slapped.");
    },	
    smash: function (target, room, User) {
		if (!target) return this.sendReply('/smash needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has head smashed  ' + target + '!');
		targetUser.popup("FUCKING SMASHING!");
    },
    outrage: function (target, room, User) {
		if (!target) return this.sendReply('/outrage needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' uses Outrage on the opposing  ' + target + '!');
		targetUser.popup("Watch out for the wrath!");
    },
    catch: function (target, room, User) {
		if (!target) return this.sendReply('/catch needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has head caught  ' + target + ' in their Pokeball.');
		targetUser.popup("FUCKING SMASHING!");
    },
    explode: function (target, room, User) {
		if (!target) return this.sendReply('/explode needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has exploded on  ' + target + '!');
		targetUser.popup("ALLY AKBAR!!!!!!");
	},
	slam: function (target, room, User) {
		if (!target) return this.sendReply('/slam needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Boi get slammed!');
		let targetUser = Users.get(target);
		room.add(User + ' has Body Slammed  ' + target + '!');
		targetUser.popup("FUCKING BODIED!");
	},
	chal: function (target, room, User) {
		if (!target) return this.sendReply('/chal needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Pffft your challenge meant nothing!');
		let targetUser = Users.get(target);
		room.add(User + ' has challenged  ' + target + ' to a battle!');
		targetUser.popup("You were just challenged to a battle!");
	},
	poke: function (target, room, User) {
		if (!target) return this.sendReply('/poke needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('No you get poked! You cannot master the capability of the epicness that is using the POKE.');
		let targetUser = Users.get(target);
		room.add(User + ' has poked  ' + target + '!');
		targetUser.popup("You were just poked!");
	},
	sweep: function (target, room, User) {
		if (!target) return this.sendReply('/sweep needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Why you always lying!?!?!');
		let targetUser = Users.get(target);
		room.add(User + ' has just swept  ' + target + '!');
		targetUser.popup("You were ANNIHILATED!");
	},
	rko: function (target, room, User) {
		if (!target) return this.sendReply('/rko needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Hey, you, you aren\'t tough enough to express the usage of this!');
		let targetUser = Users.get(target);
		room.add(User + ' has RKO\'ed  ' + target + '!');
		targetUser.popup("RKO OUTTA NOWHERE!");
	},
	analyze: function (target, room, User) {
		if (!target) return this.sendReply('/analyze needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('You lack the psychological powers to use this.');
		let targetUser = Users.get(target);
		room.add(User + ' is analyzing  ' + target + '\'s intentions.');
		targetUser.popup("You are being analyzed!");
	},
	whip: function (target, room, user) {
		if (!target) return this.sendReply('/whip needs a target.');
		if (!this.can('lock', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(user + ' has whipped ' + targetUser + '.');
		targetUser.popup(user + ' has whipped you.');
	},
	smack: function (target, room, user) {
		if (!target) return this.sendReply('/smack needs a target.');
		if (!this.can('ban')) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(user + ' has smacked ' + targetUser + '.');
	},
	memed: function (target, room, User) {
		if (!target) return this.sendReply('/memed needs a target.');
		if (!this.can('declare')) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has memed ' + targetUser + '.');
		this.parse('/declare NIIIIICE MEEEEME');
	},
	banhammer: function (target, room, User) {
		if (!target) return this.sendReply('/banhammer needs a target.');
		if (!this.can('ban', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		if (targetUser.can('root')) return this.sendReply('You cannot ban an Admin - nice try. Chump.');
		room.add(User + ' has gave the hammer to ' + target + '.');
		targetUser.popup("The Hammer has been dropped");
	}, 
	rekt: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.imgur.com/C26ZRE6.gif" width="600" height="300"</center>');
	}, 
	bombing: function (target, room, User) {
		if (!target) return this.sendReply('/bombing needs a target.');
		if (!this.can('ban', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' bombed ' + target + '.');
		targetUser.popup("The bomb has exploded");
	},
	noscope: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox('<center><img src=http://stream1.gifsoup.com/view3/20140324/5006332/360-noscope-chicken-o.gif width="600" height="300"</center>');
	},
	roflstomp: function (target, room, User) {
		if (!target) return this.sendReply('/roflstomp needs a target.');
		if (!this.can('ban', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has roflstomped ' + target + '.');
		targetUser.popup("GIT ROFLSTOMPED BOII!");
	},
	tip: function (target, room, User) {
		if (!target) return this.sendReply('/tip needs a target.');
		if (!this.can('ban', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has tipped their fedora to ' + targetUser + '.');
		targetUser.popup('Someone has tipped their fedora to you');
	},
	bow: function (target, room, User) {
		if (!target) return this.sendReply('/bow needs a target.');
		if (!this.can('broadcast', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has bowed to ' + targetUser + '.');
		targetUser.popup('Someone has bowed to you');
	},
	rekted: function (target, room, User) {
		if (!target) return this.sendReply('/rekted needs a target.');
		if (!this.can('eval')) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has destroyed ' + targetUser + '.');
		targetUser.popup('Someone has destroyed you');
	},
	smite: function (target, room, User) {
		if (!target) return this.sendReply('/smite needs a target.');
		if (!this.can('eval')) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has smited ' + targetUser + ' with their wrath.');
		targetUser.popup('A GOD has made you feel their wrath');
	},
	fired: function (target, room, User) {
		if (!target) return this.sendReply('/fired needs a target.');
		if (!this.can('lock')) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' fired ' + targetUser + '.');
		targetUser.popup('YOU HAVE BEEN FIRED!');
	},
	broke: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox('<center><video src="http://r4---sn-ab5l6nzs.googlevideo.com/videoplayback?source=youtube&pl=24&mime=video/webm&ip=68.132.51.87&expire=1456788631&id=o-AHMd8ZLgKPboESCKb60dXCAAV6rjEC9Kof3-2-QQfdB8&keepalive=yes&upn=1M4ZMLLmG0w&key=cms1&fexp=9406852,9408491,9412845,9416126,9416985,9418223,9420452,9422596,9423661,9423662,9424037,9424135,9424772,9425780,9427245,9429055,9429087,9429505&clen=170856526&itag=242&dur=35995.760&signature=34DC47CC23F06F6F70A02FD47DE6DA98EE94D7C1.7185593359F397AC90C9498AD91CB6A09211E9E2&ipbits=0&sver=3&sparams=clen,dur,expire,gir,id,initcwndbps,ip,ipbits,itag,keepalive,lmt,mime,mm,mn,ms,mv,nh,pl,source,upn&lmt=1449590895266333&gir=yes&title=Windows-Error-Remix-10-Hours%20[BollyCine.Net]&redirect_counter=1&req_id=a7b35ef98b4ba3ee&cms_redirect=yes&mm=30&mn=sn-ab5l6nzs&ms=nxu&mt=1456766974&mv=m" controls"play/stop" width="400" height="300"></video></center>');
	},
	dunked: function (target, room, user) {
        if (!target) return this.sendReply('/dunked needs a target.');
        if(!this.can('broadcast', null, room))  return this.errorReply('GET DUNKED ON!(access denied)');
        let targetUser = Users.get(target);
        room.add(user + ' just dunked on ' + targetUser + '.');
        targetUser.popup('GET DUNKED ON FOOL!!!!');
    },
    dank: function (target, room, user) {
        if (!target) return this.sendReply('/dank needs a target.');
        if(!this.can('ban', null, room)) return this.errorReply('YOU ARENT DANK ENOUGH! (Access Denied!)');
        let targetUser = Users.get(target);
        room.add(targetUser + ' has recieved a dank meme from ' + user + '.');
        targetUser.popup('You have recieved a dank meme (legend of zelda treasure found music plays)');
    },
    sans: function (target, room, user) {
    	if (!this.runBroadcast()) return;
	  	if (user.userid !== 'volco' && user.userid !== 'emgprfvolco' && user.userid !== 'santheskeleton') 
	  	return this.errorReply('You wanna have a bad time?');
	  	this.sendReplyBox('<center>So I got a question for you.... do you think the worst person.. can change?<br><img src="http://i.imgur.com/DPr9ifK.gif" height="50" width="50"><br>heh alright i have a better question... DO YOU WANNA HAVE A BAD TIME?!<br><br><audio src="https://dl.pushbulletusercontent.com/Jyh0owl5BR8rNmcQjFH9VlrQaDPKWCeT/Megalovania.mp3" controls=""></audio></center>');
    	
    },
    trump: function (target, room, user) {
    	if (!this.runBroadcast()) return;
	  	if (user.userid !== 'volco' && user.userid !== 'emgtechpvolco' && user.userid !== 'himynameistrump') return this.errorReply('You illegal immigrant!');
	  	this.sendReplyBox('<center><img src="http://cdn.buzzlie.com/wp-content/uploads/2015/11/54a07996c8f1c37f77be418079ae352a.jpg" height="300" width="300"><br></center>');
    },
    sans2: function (target, room, user) {
		if (!target) return this.sendReply('/sans2 needs a target.');
	  	if (user.userid !== 'volco' && user.userid !== 'emgtechpvolco' && user.userid !== 'santheskeleton' ) return this.errorReply('(You feel like you\'re gonna have a bad time');
	  	let targetUser = Users.get(target);
	  	room.add(targetUser + ' JUST GOT DUNKED ON!!!!!');
	  	targetUser.popup('|html|<center><img src="http://lpix.org/2269600/4000.gif" height="300" width="300"</center><br>GEEEEEET DUNKED ON!!!');
    },
	break: function (target, room, user) {
		if (!target) return this.sendReply('/break needs a target.');
		if (!this.can('eval', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(user + ' has broken ' + targetUser + '.');
		targetUser.popup(user + ' has smashed you 2 bits.');
	},
	swat: function (target, room, user) {
		if (!target) return this.sendReply('/swat needs a target.');
		if (!this.can('ban')) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(user + ' has swatted ' + targetUser + ' out of the sky');
	},
	donger: function (target, room, User) {
		if (!target) return this.sendReply('/donger needs a target.');
		if (!this.can('declare')) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has begun a riot against ' + targetUser + '.');
		this.parse('/declare ᕙ༼ຈل͜ຈ༽ᕗ flex your dongers ᕙ༼ຈل͜ຈ༽ᕗ');
	},
	splat: function (target, room, User) {
		if (!target) return this.sendReply('/splat needs a target.');
		if (!this.can('ban')) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has Splatted ' + targetUser + '.');
		this.parse('/Declare you were splatted by the Aerospray PG' );
	},
	roasted: function (target, room, User) {
		if (!target) return this.sendReply('/roasted needs a target.');
		if (!this.can('ban', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has burned  ' + target + ' (Better put some ice on that)');
		targetUser.popup("My nigga you just got roasted");
	}, 
	behave: function (target, room, User) {
		if (!target) return this.sendReply('/behave needs a target.');
		if (!this.can('ban', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has told ' + target + ' to get their shit together');
		targetUser.popup("Nigga Behave!");
	}, 
	bhunt: function (target, room, User) {
		if (!target) return this.sendReply('/their needs a target.');
		if (!this.can('ban', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has hunted ' + target + ' for the booty');
		targetUser.popup("( ͡° ͜ʖ ͡°)Gimme That Booty( ͡° ͜ʖ ͡°)");
	}, 
	senpai: function (target, room, User) {
		if (!target) return this.sendReply('/senpai needs a target.');
		if (!this.can('ban', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has once again failed to notice ' + targetUser + '.');
		targetUser.popup('senpai gives no shits about you');
	},
    badtime: function (target, room, user) {
        if (!target) return this.sendReply('/badtime needs a target');
        if(!this.can('eval', null, room)) return this.errorReply('kids like you should be burning in hell');
        let targetUser = Users.get(target);
        room.add(targetUser + ' felt their sins crawling on their back ');
        targetUser.popup('Do you want to have a bad time?');
    },
};
