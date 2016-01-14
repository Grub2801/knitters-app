 var express         = require('express');
var router          = express.Router();
var mongoose        = require('mongoose');
var methodOverride  = require('method-override');
var bodyParser      = require('body-parser')
var Knit            = require('../../models/knit');
var multipart       = require('connect-multiparty');
var S3FSclass       = require('s3fs');
var fs              = require('fs');
var randomstring    = require("randomstring");

var multipartMiddleware = multipart();
var S3FS = new S3FSclass('knitter-app', {
  accesKeyId:      process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

module.exports      = function (app) {
  app.use('/', router);
};

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  // Otherwise the request is always redirected to the home page
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(401).json({message: "Please Login"});
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
      res.json(knits);
    }
  });
})

//CREATE
router.post('/api/knits', authenticatedUser, multipartMiddleware, function (req, res){
  var file = req.files.file;
  var stream = fs.createReadStream(file.path);

  var fileName = randomstring.generate({readable: true});
    fileName += '.png';

  S3FS.writeFile(fileName, stream).then(function(){
    // delete the file
    fs.unlink(file.path, function(err){
      if (err) console.log(err);

      var knit = req.body.knit;
      knit.image = fileName;

      Knit.create(req.body.knit, function (err, knit){
        if (err) {
          res.status(400).json({success: false, message: err})
        } else {
          // res.send(knit);
          res.redirect('../knits/' + knit._id);
        }
      });
    });
  })
})

//SHOW
router.get('/api/knits/:id', function (req, res){
  Knit.findById(req.params.id, function (err, knit){
    if (err) {
      res.status(400).json({success: false, message: err})
    } else {
      res.json(knit);
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