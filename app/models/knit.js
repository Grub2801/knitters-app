var mongoose = require('mongoose');

var KnitSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
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