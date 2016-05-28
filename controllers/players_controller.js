/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var players= require('../models/players_models.js');

// router.get('/', function(req,res) {
// 	res.redirect('/index')
// });

router.get('/draftpage', function(req,res) {
	players.all(function(data){
		console.log(data);
		//rendering onto handlebars view "draftpage, sending 'draftablePlayers' object to view"
		res.render('draftpage', {draftablePlayers: data});

		// had a redirect here but took it out since we don't want them to go anywhere after getting the draftable players

		// res.redirect('/:index');
	});
});

// the following is stuff we probably don't need, but it's modeled after the cats exercise, so i left it in just in case.


// router.post('/players/create', function(req,res) {
// 	players.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], function(data){
// 		res.redirect('/players')
// 	});
// });

// router.put('/players/update/:id', function(req,res) {
// 	var condition = 'id = ' + req.params.id;

// 	console.log('condition', condition);

// 	players.update({'sleepy' : req.body.sleepy}, condition, function(data){
// 		res.redirect('/players');
// 	});
// });

// router.delete('/players/delete/:id', function(req,res){
// 	var condition = 'id = ' + req.params.id;
// 	console.log('condition', condition);
// 	players.delete(condition, function(data){
// 	res.redirect('/players')	
// 	});
// })

module.exports = router;
