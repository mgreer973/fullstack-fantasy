var orm = require('../config/orm.js');

//console.log('in admin.js');
var admin = {
	findOne: function(condition, cb) {
		console.log('admin.findOne')
	  orm.findOne('users', condition, function(res){
	      cb(res);
	  });
  },
	all: function(cb) {
		orm.all('users', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	create: function(cols, vals, cb) {
		orm.create('users', cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update('users', objColVals, condition, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb){
		orm.delete('users', condition, function(res){
			cb(res);
		});
	}
};

module.exports = admin;