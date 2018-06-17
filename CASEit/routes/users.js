var express = require('express');
var router = express.Router();
/**
 * 
 * 
 * These are the Extended Routes to execute 
 * operations after the Switch Init for the users.js 
 * 
 * 
 */
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/detail', function(req, res, next) {
  res.send('detail');
});


module.exports = router;
