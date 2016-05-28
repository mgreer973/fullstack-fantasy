var express = require('express');
var router  = express.Router();
var bcrypt = require('bcryptjs');
var admin = require('../models/admin.js');

router.get('/sign-in', function(req,res) {
	res.render('admin/sign_in');
});

router.post('/login', function(req, res) {
	var email = req.body.email;

	var condition = "email = '" + email + "'" + " AND role = 'A'" ;
	console.log('cond= ', condition);
	admin.findOne(condition, function(user){

		if (user){
			bcrypt.compare(req.body.password, user.password_hash, function(err, result) {
					if (result == true){

						req.session.logged_in = true;
						req.session.user_id = user.id;
						req.session.user_email = user.email;

						res.redirect('/selection');
					}else{
            res.send('You put in the wrong password.')
          }
			});
		}else{
			res.send('This account is not an admin account please sign in/up as user')
		}
	});
});

module.exports = router;