exports.commands = {
    
    rf: 'roomfounder',
    roomfounder: function (target, room, user) {
        if (!room.chatRoomData) {
            return this.sendReply("/roomfounder - This room isn't designed for per-room moderation to be added.");
        }
        target = this.splitTarget(target, true);
        var targetUser = this.targetUser;
        if (!targetUser) return this.sendReply("User '" + this.targetUsername + "' is not online.");
        if (!this.can('declare')) return false;
        if (room.isPersonal) return this.sendReply("You can't do this in personal rooms.");
        if (!room.auth) room.auth = room.chatRoomData.auth = {};
        if (!room.leagueauth) room.leagueauth = room.chatRoomData.leagueauth = {};
        var name = targetUser.name;
        room.auth[targetUser.userid] = '#';
        room.founder = targetUser.userid;
        this.addModCommand(name + ' was appointed to Room Founder by ' + user.name + '.');
        room.onUpdateIdentity(targetUser);
        room.chatRoomData.founder = room.founder;
        Rooms.global.writeChatRoomData();
    },
    
    roomdefounder: 'deroomfounder',
    deroomfounder: function (target, room, user) {
        if (!room.auth) {
            return this.sendReply("/roomdeowner - This room isn't designed for per-room moderation");
        }
        target = this.splitTarget(target, true);
        var targetUser = this.targetUser;
        var name = this.targetUsername;
        var userid = toId(name);
        if (room.isPersonal) return this.sendReply("You can't do this in personal rooms.");
        if (!userid || userid === '') return this.sendReply("User '" + name + "' does not exist.");

        if (room.auth[userid] !== '#') return this.sendReply("User '" + name + "' is not a room founder.");
        if (!this.can('declare')) return false;

        delete room.auth[userid];
        delete room.founder;
        this.sendReply("(" + name + " is no longer Room Founder.)");
        if (targetUser) targetUser.updateIdentity();
        if (room.chatRoomData) {
            Rooms.global.writeChatRoomData();
        }
    },

    roomowner: function (target, room, user) {
        if (!room.chatRoomData) {
            return this.sendReply("/roomowner - This room isn't designed for per-room moderation to be added");
        }
        target = this.splitTarget(target, true);
        var targetUser = this.targetUser;

        if (!targetUser) return this.sendReply("User '" + this.targetUsername + "' is not online.");
        if (!targetUser.registered) return this.sendReply("User '" + name + "' is not registered.");

        if (!room.founder) return this.sendReply('The room needs a room founder before it can have a room owner.');
        if (room.founder !== user.userid && !this.can('makeroom')) return this.sendReply('/roomowner - Access denied.');

        if (!room.auth) room.auth = room.chatRoomData.auth = {};

        var name = targetUser.name;

        room.auth[targetUser.userid] = '#';
        this.addModCommand("" + name + " was appointed Room Owner by " + user.name + ".");
        room.onUpdateIdentity(targetUser);
        Rooms.global.writeChatRoomData();
    }
}
