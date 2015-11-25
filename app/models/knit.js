var mongoose = require('mongoose');

var KnitSchema = new mongoose.Schema({
  name: {type: String, require: true},
  address: String,
  lon: Number,
  lat: Number,
  image: String,
  phone: String,
  email: String,
  website: String,
  hours: String,
  note: String,
});

var Knit = mongoose.model('Knit', KnitSchema);
module.exports = Knit;