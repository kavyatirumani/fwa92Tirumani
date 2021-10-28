var express = require('express');
var url = require('url');
var router = express.Router();
const querystring = require('querystring');

/* GET home page. */
router.get('/', function(req, res, next) {
  var arg = req.query.value;
  res.send('Cube root applied to:' + arg + "is" + Math.cbrt(arg));
});

module.exports = router;