
let express = require("express");
let app = express();

app.use(function(req, res, next) {
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    next();
  });
  
 


module.exports = app;