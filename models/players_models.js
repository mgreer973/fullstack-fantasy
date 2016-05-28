var orm = require('../config/orm.js');

var players= {
	// findOne: function(condition, cb) {
	//   orm.findOne('players', condition, function(res){
	//       cb(res);
	//   });
 //  },
	all: function(cb) {
		orm.all('players', function(res){
			cb(res);
		});
	}
	// ,
	// //cols and vals are arrays
	// create: function(cols, vals, cb) {
	// 	orm.create('players', cols, vals, function(res){
	// 		cb(res);
	// 	});
	// },
	// update: function(objColVals, condition, cb) {
	// 	orm.update('players', objColVals, condition, function(res){
	// 		cb(res);
	// 	});
	// },
	// delete: function(condition, cb){
	// 	orm.delete('players', condition, function(res){
	// 		cb(res);
	// 	});
	// }
};

module.exports = players