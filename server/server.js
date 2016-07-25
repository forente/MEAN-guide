var express = require('express');
var bodyParser = require('body-parser');
var index = require('./routes/index')

var app = express();

app.use(express.static('server/public'));

app.use(bodyParser.json());
app.get('/',index);


var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log("listening on port:",port);
});
