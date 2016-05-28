var express = require('express');
var router  = express.Router();


router.get('/sign-in', function(req,res) {
	res.render('admin/sign_in');
});

module.exports = router;