var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');
  debugger

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "Paul Pogba update"
  }, {
  	id: 2,
  	username: "Beppie"
  }]);
});


module.exports = router;
