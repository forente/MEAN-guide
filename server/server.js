var express = require('express');
var index = require('./routes/index')

var app = express();

app.get('/',index);


var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log("listening on port:",port);
});
