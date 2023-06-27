console.log(process.env.MESSAGE_STYLE)
let express = require("express");
let app = express();


process.env.MESSAGE_STYLE='uppercase';

app.get('/json', function(req, res){
// Variable assignment as object
var response = {
  "message": "Hello json"
};

if(process.env.MESSAGE_STYLE==='uppercase'){
  //Override message attribute value based on condition
  response.message = response.message.toUpperCase();  
}

return res.json(response);
});

module.exports = app;