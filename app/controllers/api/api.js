var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var bodyParser = require('body-parser')

var Knit = require('../../models/knit');

module.exports = function (app) {
  app.use('/', router);
};

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  // Otherwise the request is always redirected to the home page
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.json({message: "Please Login"});
  }
}

router.get('/secret', authenticatedUser, function (req, res, next) {
  res.json({message: "secret"});
});

//INDEX
router.get('/api/knits', function (req, res){
  Knit.find({}, function (err, knits){
    if (err) {
      res.status(400).json({success: false, message: err})
    } else {
      res.send(knits);
    }
  });
})

//CREATE
router.post('/api/knits', authenticatedUser, function (req, res){
  Knit.create(req.body.knit, function (err, knit){
    if (err) {
      res.status(400).json({success: false, message: err})
    } else {
      res.json({success: true})
    }
  });
})

//SHOW
router.get('/api/knits/:id', function (req, res){
  Knit.findById(req.params.id, function (err, knit){
    if (err) {
      res.status(400).json({success: false, message: err})
    } else {
      res.send(knit);
    }
  });
})

//UPDATE
router.put('/api/knits/:id', authenticatedUser, function (req, res){
  Knit.findByIdAndUpdate(req.params.id, req.body.knit, function (err, knit){
    if (err) {
      res.status(400).json({success: false, message: err})
    } else {
      res.json({message: "This knit shop has been updated, thankyou!"});
    }
  });
})

//DELETE
router.delete('/api/knits/:id', function (req, res){
  Knit.findByIdAndRemove(req.params.id, function (err, knit){
    if (err) {
      res.status(400).json({success: false, message: err})
    } else {
      res.json({message: "This knit shop has been deleted, thankyou!"});
    }
  })
})
