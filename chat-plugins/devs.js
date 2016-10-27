'use strict';

global.isDev = function (user) {
	if (!user) return;
	if (typeof user === 'Object') user = user.userid;
	let dev = Db('devs').get(toId(user));
	if (dev === 1) return true;
	return false;
};

exports.commands = {
	dev: function (target, room, user) {
        let parts = target.split(', ');
        if (!target) return this.parse("/help dev");
        let username = toId(parts[1]);

        switch (toId(parts[0])) {
            case 'give':
                if (!this.can('hotpatch')) return false;
                if (parts[1] < 1) return false;
                if (!parts[1]) return false;
                if (isDev(username)) return this.errorReply(user.name + " is already a dev.");
                Db('devs').set(username, 1);
                user.send('|popup|' + toId(parts[1]) + " has recieved Developer status from " + user.name + "");
                this.sendReply(username + ' has been granted with dev status.');
                break;

            case 'take':
                if (!this.can('hotpatch')) return false;
                if (!parts[1] < 1) return false;
                if (!parts[1]) return false;
                Db('devs').delete(username);
                user.send('|popup|' + toId(parts[1]) + " has taken Developer status from " + user.name + "");
                this.sendReply(toId(parts[1]) + '\'s dev status has been taken.');
                break;

            case 'list':
                if (!this.can('declare')) return false;
                if (!Object.keys(Db('devs').object()).length) return this.errorReply('There seems to be no user with dev status.');
                this.sendReplyBox('<center><b><u>DEV Users</u></b></center>' + '<br /><br />' + Object.keys(Db('devs').object()).join('<br />'));
                break;


            default:
                this.parse("/help dev");
        }

    },
    devhelp: ["Give: /dev give, user - Gives user developer status.",
    		  "Take: /dev take, user - Takes developer status from user.",
    		  "List: /dev list - Lists all users with developer status."]
};
