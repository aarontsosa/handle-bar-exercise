var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { 
    name: 'Aaron Sosa',
    email: 'aarontsosa@gmail.com',
    number: '678-481-1582',
    employment: 'none'
  });
});

module.exports = router;
