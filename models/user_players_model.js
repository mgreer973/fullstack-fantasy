var orm = require('../config/orm.js');

var user_players = {
	findOne: function(condition, cb) {
	  orm.findOne('user_players', condition, function(res){
	      cb(res);
	  });
  },
	all: function(cb) {
		orm.all('user_players', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	create: function(cols, vals, cb) {
		orm.create('user_players', cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update('user_players', objColVals, condition, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb){
		orm.delete('user_players', condition, function(res){
			cb(res);
		});
	},

	//MAKE SURE YOUR PLAYER IDS ARE IN AN ARRAY
	batchCreate: function(cols, vals, cb) {
		for (var i = vals[1].length - 1; i >= 0; i--) {
			var valueArray = [vals[0],vals[1][i]]
			orm.create('user_players', cols, valueArray)
		}
	}
		
};

module.exports = user_players;