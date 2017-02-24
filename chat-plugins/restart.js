'use strict';

try {
    forever = require('forever');
}

catch (e) {
    console.error(e);
}
exports.commands = {

    restart: function (target, room, user) {
        if (!this.isSysop) return this.errorReply("/restart - Access denied.");
        if (!Rooms.global.lockdown) {
            return this.sendReply("For safety reasons, /restart can only be used during lockdown.");
        }
        if (Chat.updateServerLock) {
            return this.sendReply("Wait for /updateserver to finish before using /restart.");
        }
        this.logModCommand(user.name + ' used /restart');
        Rooms.global.send('|refresh|');
        forever.restart('app.js');
    },
    restarthelp: ["/restart - Restarts the server. Requires system operator status."],
};
