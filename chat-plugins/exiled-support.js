'use strict';

const fs = require('fs');
const moment = require('moment');
const hashColor = require('../config/color.js');

Exiled.userData = Object.create(null);

function loadUserData() {
	fs.readFile('config/exiledusers.json', 'utf8', function(err, file) {
		if (err) return;
		Exiled.userData = JSON.parse(file);
	});
}
loadUserData();

try {
	Object.assign(Exiled, {

		generateNews: function() {
			let lobby = Rooms('lobby');
			if (!lobby) return false;
			if (!lobby.news || Object.keys(lobby.news).length < 0) return false;
			if (!lobby.news) lobby.news = {};
			let news = lobby.news,
				newsDisplay = [];
			Object.keys(news).forEach(announcement => {
				newsDisplay.push(`<h4>${announcement}</h4>${news[announcement].desc}<br /><br /><strong>—<font color="${hashColor(news[announcement].by)}">${news[announcement].by}</font></strong> on ${moment(news[announcement].posted).format("MMM D, YYYY")}`);
			});
			return newsDisplay;
		},
		newsDisplay: function(user) {
			if (!Users(user)) return false;
			let newsDis = this.generateNews();
			if (newsDis.length === 0) return false;

			if (newsDis.length > 0) {
				newsDis = newsDis.join('<hr>');
				return Users(user).send(`|pm|~Exiled News|${Users(user).getIdentity()}|/raw ${newsDis}`);
			}
		},
	});
}
catch (e) {
	let staff = Rooms('staff');
	if (staff) staff.add(`|html|<div class="broadcast-red"><b>CUSTOM NEWS FUNCTIONALITY HAS CRASHED:</b><br />${e.stack}<br /><br /><b>Please report this to a developer.`).update();
}
