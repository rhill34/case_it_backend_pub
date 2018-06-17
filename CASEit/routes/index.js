var express = require('express');
var router = express.Router();

/**
 *This File handles request types to the home page  
 * e.g. GET, PUT, POST, DELETE, etc..
 * 
 */ /*GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * This is the var to export this files methods and functions 
 */
module.exports = router;
