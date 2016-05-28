/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var scoreboard = {
	all: function(cb) {
		orm.all('scoreboard', function(res){
			cb(res);
//			console.log('cb', cb);
		});
	}
};

module.exports = scoreboard;
