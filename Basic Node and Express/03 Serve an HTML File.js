let express = require('express');
let app = express();

app.get("/", function(req, res) {
  htmlPath = __dirname + '/views/index.html';
  res.sendFile(htmlPath);
});

  

module.exports = app;



