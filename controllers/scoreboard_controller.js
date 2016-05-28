/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var scoreboard = require('../models/scoreboard.js');

router.get('/', function(req,res) {
	console.log('get/')
	res.redirect('/scoreboard')
});

router.get('/display', function(req,res) {
	scoreboard.all(function(data){
		console.log('router.get(/display')
		var hbsObject = {scoreboard : data, layout: 'scbmain'}
		res.render('scoreboard', hbsObject);
	});
});

module.exports = router;
