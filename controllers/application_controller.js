var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  // res.redirect('/');
  res.render('index');
});

module.exports = router;
