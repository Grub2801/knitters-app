var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('static/home', {
    // title: 'Generator-Express MVC'
  });
});

router.get('/knits', function (req, res, next) {
  res.render('knit/index', {
    // title: 'Generator-Express MVC'
  });
});

router.get('/knits/:id', function (req, res, next) {
  res.render('knit/show', {
    // title: 'Generator-Express MVC'
  });
});
