let express = require("express");
let app = express();



app.get('/:word/echo', function(req, res) {
    let word = req.params.word
    res.json({
        echo: word
      });
});
 


module.exports = app;



