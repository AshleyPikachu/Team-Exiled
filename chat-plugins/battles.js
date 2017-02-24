/* * * * * * * * * * * *
 * Battle Factory Mod  *
 * by                  *
 * Hawk619             *
 * DeathlyPlays :3     *
 * and                 *
 * Volco               *
 * * * * * * * * * * * */

'use strict';

if (!global.bf) global.bf = [{}, {}];
var bfgames = global.bf[0];
var bfplayers = global.bf[1];

const EXPIRATION_TIME = 90 * 1000;
const INACTIVE_KICK_TIME = 30 * 1000;

var BattleFactory = (function () {
    function BattleFactory(user1, user2, gameNo) {
        this.gameNo = gameNo;
        this.p1 = user1;
        this.p2 = user2;
        this.players = [this.p1, this.p2];
        this.checkPlayer = function (user) {
                if (this.p1.userid === user.userid) return this.p2.name;
                if (this.p2.userid === user.userid) return this.p1.name;
                return false;
            },
            this.phase = 'waiting';
        this.timer = setTimeout(this.end.bind(this, 'The game request has expired.'), EXPIRATION_TIME);
    };

    BattleFactory.prototype.accept = function () {
        this.currentPlayer = this.players[Math.floor(Math.random() * 2)];
        this.phase = 'started';
        this.resetTimer();
        var message = 'If you accidentally close out, use <em>/bf open</em> to reopen the game.</em>';
        this.updateUser(this.p1, message);
        this.updateUser(this.p2, message);
    };

    BattleFactory.prototype.switchPlayer = function () {
        if (this.currentPlayer === this.p1) this.currentPlayer = this.p2;
        else this.currentPlayer = this.p1;
    };

    BattleFactory.prototype.getGrid = function (gameOver) {
        var style = 'width: 400px; height: 100px; font-size: 20pt; ';
        var grid = "<div style='background-color: #627ADC ; border: 12px double #3D668E ; color: #FFF'><center><h3><font face='arial' size='4'><u><b>Charizard Battle Factory</b></u></font></h3><br><br><table style='padding: 15px'><tbody><tr><td>Battle Tower Trainer's Charizard<br><div style='width: 200px ; font-family: &quot;trebuchet ms&quot; , &quot;helvetica&quot; , sans-serif ; font-style: italic ; font-size: 2'><div style='height: 7px ; width: 200px ; background-color: gray'><div style='height: 7px ; width: 200px ; background-color: lightgreen'></div></div><center>HP:&nbsp;&nbsp;100%</center></div></td><td><div style='height: 100px ; width: 100px ; background-image: url(&quot;http://pldh.net/media/pokemon/gen5/blackwhite_animated_shiny/006.gif&quot;) ; background-repeat: no-repeat ; background-size: contain ; background-position: center'></div></td></tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><td><div style='height: 100px ; width: 100px ; background-image: url(&quot;http://pldh.net/media/pokemon/gen5/blackwhite_animated_back_shiny/006.gif&quot;) ; background-repeat: no-repeat ; background-size: contain ; background-position: center'></div></td><td>' {{user}} 's Charizard<br><div style='width: 200px ; font-family: &quot;trebuchet ms&quot; , &quot;helvetica&quot; , sans-serif ; font-style: italic ; font-size: 2'><div style='height: 7px ; width: 200px ; background-color: gray'><div style='height: 7px ; width: 200px ; background-color: lightgreen'></div></div><center>HP:&nbsp;&nbsp;297 / 297</center></div></td></tr></tbody></table><br><br><br><center><button style='border: solid 2px rgba(33 , 68 , 72 , 0.59) ; border-radius: 6px ; background-color: blue ; height: 40px ; width: 120px' title='Move: Dragon DanceType: DragonPower: 50' value='/bf choose dragondance'>Dragon Dance</button>&nbsp;&nbsp;<button style='border: solid 2px rgba(33 , 68 , 72 , 0.59) ; border-radius: 6px ; background-color: blue ; height: 40px ; width: 120px' title='Move: Dragon Claw Type: DragonPower: 50' value='/bf choose dragonclaw'>Dragon Claw</button>&nbsp;&nbsp;<button style='border: solid 2px rgba(33 , 68 , 72 , 0.59) ; border-radius: 6px ; background-color: sandybrown ; height: 40px ; width: 120px' title='Move: Earthquake Type: GroundPower: 50' value='/bf choose earthquake'>Earthquake</button>&nbsp;&nbsp;<button style='border: solid 2px rgba(33 , 68 , 72 , 0.59) ; border-radius: 6px ; background-color: red ; height: 40px ; width: 120px' title='Move: Flare Blitz Type: FirePower: 50' value='/bf choose flareblitz'>Flare Blitz</button><br><br></center></center></div>"
        return grid;
    };


    BattleFactory.prototype.update = function () {
        var message = '|html|<center><b>' + this.currentPlayer.name + '\'s turn!</b><br/>' + this.getGrid();
        this.players.forEach(function (user) {
            user.popup(message);
        });
    };

    BattleFactory.prototype.updateUser = function (user, issue) {
        var message = '|html|<center><b>' + this.currentPlayer.name + '\'s turn!</b><br>' +
            this.getGrid() + (issue ? '<br>' + issue : '');
        user.popup(message);
    };

    BattleFactory.prototype.declareDraw = function () {
        var message = '|html|<center><b>Draw between ' + this.p1.name + ' and ' + this.p2.name + '!</b><br>' + this.getGrid(true);
        this.players.forEach(function (user) {
            user.popup(message);
        });
        this.end();
    };

    BattleFactory.prototype.declareWinner = function () {
        var message = '|html|<center><b>' + this.currentPlayer.name + ' has won the game!</b><br/>' + this.getGrid(true);
        this.players.forEach(function (user) {
            user.popup(message);
        });
        this.end();
    };

    BattleFactory.prototype.choose = function (user, num) {
        if (this.currentPlayer.userid !== user.userid) return this.updateUser(user, 'It isn\'t your turn right now.');
        if (!this.resetTimer()) {
            this.switchPlayer();
            this.update();
        }
        let choose = {
            "flareblitz": {
                id: "flareblitz",
                name: "Flare Blitz",
                basePower: 120,
                num: 394,
                recoil: [33, 100],
                accuracy: 100,
                pp: 15,
                category: "Physical",
                desc: "Has a 10% chance to burn the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
                shortDesc: "Has 33% recoil. 10% chance to burn. Thaws user.",
                isViable: true,
                secondary: {
                    chance: 10,
                    status: "brn"
                },
                flags: {
                    protect: 1,
                    contact: 1,
                    defrost: 1
                },
                priority: 0,
                target: "normal",
                type: "Fire",
                zMovePower: 190,
                contestType: "Cool",
            },
            "dragonclaw": {
                num: 337,
                accuracy: 100,
                basePower: 80,
                category: "Physical",
                desc: "No additional effect.",
                shortDesc: "No additional effect.",
                id: "dragonclaw",
                isViable: true,
                name: "Dragon Claw",
                pp: 15,
                priority: 0,
                flags: {
                    contact: 1,
                    protect: 1,
                    mirror: 1
                },
                secondary: false,
                target: "normal",
                type: "Dragon",
                zMovePower: 160,
                contestType: "Cool",
            },
            "dragondance": {
                num: 349,
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "Raises the user's Attack and Speed by 1 stage.",
                shortDesc: "Raises the user's Attack and Speed by 1.",
                id: "dragondance",
                isViable: true,
                name: "Dragon Dance",
                pp: 20,
                priority: 0,
                flags: {
                    snatch: 1
                },
                boosts: {
                    atk: 1,
                    spe: 1,
                },
                secondary: false,
                target: "self",
                type: "Dragon",
                zMoveEffect: 'clearnegativeboost',
                contestType: "Cool",
            },
            "earthquake": {
                num: 89,
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "Damage doubles if the target is using Dig.",
                shortDesc: "Hits adjacent Pokemon. Power doubles on Dig.",
                id: "earthquake",
                isViable: true,
                name: "Earthquake",
                pp: 10,
                priority: 0,
                flags: {
                    protect: 1,
                    mirror: 1,
                    nonsky: 1
                },
                secondary: false,
                target: "allAdjacent",
                type: "Ground",
                zMovePower: 180,
                contestType: "Tough",
            },
        };
    };

    BattleFactory.prototype.end = function (message) {
        if (message) {
            if (this.phase === 'waiting') this.players.forEach(function (user) {
                user.send('|popup|' + this.p2.getIdentity() + '|' + this.p1.getIdentity() + '|/html <div class="message-error">' + message + '</div>');
            });
            else this.players.forEach(function (user) {
                user.popup(message);
            });
        }
        clearTimeout(this.timer);
        delete bfplayers[this.p1.userid];
        delete bfplayers[this.p2.userid];
        delete bfgames[this.gameNo];
    };

    BattleFactory.prototype.resetTimer = function () {
        clearTimeout(this.timer);
        this.timer = setTimeout(this.end.bind(this, 'The game has been ended due to player inactivity.'), INACTIVE_KICK_TIME);
    };

    return BattleFactory;
})();

var cmds = {
    '': 'help',
    help: function (target, room, user) {
        this.sendReplyBox('<b>Battle Factory commands</b><br>' +
            '<li>/bf c <em>User</em> - Sends a user a request to play Battle Factory. This can also be used in PMs. (Requests automatically expire if they\'re not accepted or declined within 1.5 minutes.)<br>' +
            '<li>/bf accept <em>User</em>  - Accepts a Battle Factory request from a user.<br>' +
            '<li>/bf decline <em>User</em> - Declines a Battle Factory request from a user.<br>' +
            '<li>/bf choose <em>Move</em> - Chooses a move in Battle Factory (usage of this command is unlikely to be used because of the buttons in the popup send this value).<br>' +
            '<li>/bf see or /bf show - Opens up the Battle Factory board, in case you accidentally closed it out.<br>' +
            '<li>/bf end - Exits the current game of Battle Factory. Cancels a play request if the game hasn\'t been started yet. (Note: The game automatically ends after a user stays inactive for more than 30 seconds.)<br>'
        );
    },

    chall: 'c',
    challenge: 'c',
    play: 'c',
    c: function (target, room, user, connection, cmd) {
        if (!target || !target.trim()) return this.sendReply('|html|/bf ' + cmd + ' <em>User</em> - Challenges a user to a game of Battle Factory.');
        var targetUser = (Users.get(target) ? Users.get(target).name : target);
        target = Users.get(target);
        if (!target || !target.connected) return this.sendReply('User ' + targetUser + ' is offline.');
        if (user.userid === target.userid) return this.sendReply('You can\'t play Battle Factory with yourself!');
        if (user.userid in bfplayers) {
            var game = bfgames[bfplayers[user.userid]];
            if (game.phase === 'waiting') return this.sendReply('You have already requested ' + game.checkPlayer(user) + ' to a game of Battle Factory. Wait for their response.');
            if (game.checkPlayer(target)) return this.sendReply('You are already playing Battle Factory with ' + target.name + '!');
            return this.sendReply('You are already playing Battle Factory with another user. You cannot ' + target.name + ' a request.');
        }
        if (target.userid in bfplayers) {
            var game = bfgames[bfplayers[target.userid]];
            if (game.checkPlayer(user)) return this.sendReply(game.checkPlayer(user) + ' has already sent you a request...');
            return this.sendReply(target.name + ' has already asked someone else for a game of Battle Factory.');
        }
        for (var i in bfgames)
            if (bfgames[i].checkPlayer(user)) return this.sendReply('You were sent a game request by ' + bfgames[i].checkPlayer(user) + '. First respond to that request before challenging someone else.');
        target.send('|pm|' + user.getIdentity() + '|' + target.getIdentity() + '|/html ' + user.getIdentity() + ' wants to play Battle Factory!<br>' +
            '<button name = "send" value = "/bf accept ' + user.userid + '">Accept</button> <button name = "send" value = "/bf decline ' + user.userid + '">Decline</button>'
        );
        user.send('|pm|' + target.getIdentity() + '|' + user.getIdentity() + '|/html You have challenged ' + target.getIdentity() + ' to a game of Battle Factory. Waiting for their response...');
        var gameId = bfplayers[user.userid] = (Object.keys(bfgames).length ? Object.keys(bfgames).length - 1 : 0);
        bfgames[gameId] = new BattleFactory(user, target, gameId);
    },

    acc: 'accept',
    accept: function (target, room, user, connection, cmd) {
        if (!target || !target.trim()) return this.sendReply('|html|/bf ' + cmd + ' <em>User</em> - Accepts a Battle Factory challenge from a user.');
        var game = bfgames[bfplayers[user.userid]];
        var targetUser = (Users.get(target) ? Users.get(target).name : target);
        target = Users.get(target);
        if (!target || !target.connected) return this.sendReply('User ' + targetUser + ' is offline.');
        if (user.userid in bfplayers) {
            if (game.phase === 'waiting') return this.sendReply('You have already challenged someone else to a game of Battle Factory. You cannot accept this user\'s challenge.');
            if (game.checkPlayer(target)) return this.sendReply(game.checkPlayer(user) + ' is playing with you right now!');
            return this.sendReply('You are already playing Battle Factory with someone else. You cannot accept ' + target.name + 's request.');
        }
        if (user.userid === target.userid) return this.sendReply('You can\'t accept a challenge from yourself!');
        if (!(target.userid in bfplayers)) return this.sendReply(target.name + ' has not challenged you to a game of Battle Factory.');

        game = bfgames[bfplayers[target.userid]];
        if (game.p2.userid !== user.userid) return this.sendReply(target.name + ' has not challenged you to a game of Battle Factory.');
        bfplayers[user.userid] = bfplayers[target.userid];
        game.accept();
    },

    dec: 'decline',
    decline: function (target, room, user, connection, cmd) {
        if (!target || !target.trim()) return this.sendReply('|html|/bf ' + cmd + ' <em>User</em> - Declines a Battle Factory challenge from a user.');
        var targetUser = (Users.get(target) ? Users.get(target).name : target);
        target = Users.get(target);
        if (!target || !target.connected) return this.sendReply('User ' + targetUser + ' is offline.');
        if (user.userid === target.userid) return this.sendReply('You can\'t use this command on yourself.');
        var game = bfgames[bfplayers[toId(targetUser)]];
        if (!(target.userid in bfplayers) || !game.checkPlayer(target)) return this.sendReply(target + ' has not challenged you to a game of Battle Factory.');
        if (game.checkPlayer(target) && game.phase == 'started') return this.sendReply('You are playing with ' + game.checkPlayer(user) + ' right now. If you want to end the game, use /bf end.');

        if (Users.get(target) && Users.get(target).connected) Users.get(target).send('|popup|' + user.getIdentity() + '|' + Users.get(target).getIdentity() + '|/error Your Battle Factory request was declined.');
        user.send('|pm|' + Users.get(target) + '|' + user.getIdentity() + '|/error You have declined the game request.');

        game.end();
    },

    choose: function (target, room, user, connection, cmd) {
        if (!(user.userid in bfplayers)) return this.sendReply('You aren\'t playing a game of Battle Factory right now.');
        var game = bfgames[bfplayers[user.userid]];
        if (game.phase === 'waiting') return this.sendReply('The request has not been accepted yet. You can only use this command in an active game.');
        game.choose(user, target);
    },

    update: 'see',
    view: 'see',
    show: 'see',
    see: function (target, room, user) {
        if (!(user.userid in bfplayers)) return this.sendReply('You aren\'t playing a game of Battle Factory right now.');
        var game = bfgames[bfplayers[user.userid]];
        if (game.phase === 'waiting') return this.sendReply('The request has not been accepted yet. You can only use this command in an active game.');
        game.update();
    },

    exit: 'end',
    leave: 'end',
    end: function (target, room, user) {
        if (!(user.userid in bfplayers)) return this.sendReply('You aren\'t playing a game of Battle Factory right now.');
        var game = bfgames[bfplayers[user.userid]];
        if (game.phase === 'waiting') game.end('The request was withdrawn.');
        else game.end(user.name + ' has decided to leave the game midway.');
    }
};

exports.commands = {
    bf: 'BattleFactory',
    BattleFactory: cmds,
    bfend: 'endbf',
    endbf: cmds.end
};
