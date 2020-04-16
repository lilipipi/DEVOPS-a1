var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Users.findAll({
    include: [ models.Tasks ]
  }).then(function(users) {
    res.render('index', {
      users: users
    });
  });
});

module.exports = router;
