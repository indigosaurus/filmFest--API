var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog'); //reroutes to path/catalog
});

module.exports = router;
