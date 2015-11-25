//common functions and variables here
var errorHandling = function (error) {
  console.log(error);
  console.log('API ERROR: ' + error.responseJSON.message);
};
