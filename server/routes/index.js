var router = require("express").Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_walking_skeleton');

var Cat = mongoose.model('Cat', {name:String});

router.get('/', function(request, response){

  console.log("Here you go!");
  response.send('Hey!');
});

module.exports = router;
