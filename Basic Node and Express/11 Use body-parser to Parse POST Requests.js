var bodyParser = require("body-parser");
let express = require("express");
let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



module.exports = app;
