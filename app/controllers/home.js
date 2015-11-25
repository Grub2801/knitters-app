var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('static/home', {
  });
});

router.get('/knits', function (req, res, next) {
  res.render('knit/index', {
  });
});

router.get('/knits/new', function (req, res, next) {
  res.render('knit/new', {

  });
});

router.get('/knits/edit', function (req, res, next) {
  res.render('knit/edit', {
  });
})

router.get('/knits/:id', function (req, res, next) {
  res.render('knit/show', {
  });
});


