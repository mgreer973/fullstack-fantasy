/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var user_players = require('../models/user_players_model.js');


	//player IDs must be in an array for this to work.

router.post('/create/:id', function(req,res) {
	user_players.batchCreate(['id', 'player_id'], [req.session.user_ID, req.body.playerID], function(data){

// if this breaks, then the redirect may have to come out.
		//this will redirect to the team:id if we make a team page. if not, we can change this to index.
		// res.redirect('/team:id')
		res.redirect
	});
});

// put it in a get just in case we want to use it

router.get('/team/:id', function(req,res) {
	var condition = 'id=' + req.session.id;
	//this will get only the players for the signed in user. I have it set to hit the /team/:id route
	console.log('condition', condition);
	user_players.findOne(condition, function(data){
		res.redirect('/index');
	});

});

// OLD POST... got rid of this to do a batch create, in order to use a loop (see user_player_model)

router.post('/user_players/create', function(req,res) {
	user_players.create(['id', 'player_id'], [req.session.user_ID, req.body.playerID], function(data){
		//this can't be in the loop (res.redirect)
		res.redirect('/team:id')
	});
});

// again, just left cats stuff in just in case.

// router.put('/user_players/update/:id', function(req,res) {
// 	var condition = 'id = ' + req.params.id;

// 	console.log('condition', condition);

// 	user_players.update('user_players', {'userID' : req.body.selected, 'points': POINTS}, condition, function(data){
// 		res.redirect('/cats');
// 	});
// });

// router.delete('/cats/delete/:id', function(req,res){
// 	var condition = 'id = ' + req.params.id;
// 	console.log('condition', condition);
// 	cat.delete(condition, function(data){
// 	res.redirect('/cats')	
// 	});
// })

module.exports = router;
