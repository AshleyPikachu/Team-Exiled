 exports.commands = {
 
 slap: function(target, room, user) {
      if (!target) return this.sendReply("Slap needs a target.");
      return this.parse('/me slaps ' + target + ' in the face with a slipper!');
    },
 };