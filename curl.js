const request = require('request');

function curl(url){
  request(url, function (error, response, body) {
    console.error('error:', error);// Print the error if one occurred
    console.log(body); // Print the HTML for the Google homepage.
  });

}






module.exports = function(cmd){

  console.log(curl(cmd));
}
