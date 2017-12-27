var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json([{
      id: 1,
      username: "andreea96"
  }, {
          id: 2,
          username: 'andreea93'
  }])
});

module.exports = router;
