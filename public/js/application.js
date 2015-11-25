//common functions and variables here
var errorHandling = function (error) {
  console.log(error);
  noty({text: error.responseJSON.message, type: 'error', timeout: 3000})
};
