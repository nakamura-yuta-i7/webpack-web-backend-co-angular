var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      id: 1,
      name: "yuta"
    },
    {
      id: 2,
      name: "puu",
    },
    {
      id: 3,
      name: "hiromi",
    }
  ])
});

module.exports = router;
