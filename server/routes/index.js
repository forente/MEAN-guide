var router = require("express").Router();
var mongoose = require('mongoose');
var path = require('path');

var Mongo = mongoose.connect('mongodb://localhost/basic_walking_skeleton').connection;

var Cat = mongoose.model('Cat', {name:String});

Mongo.on('error', function (err) {
    console.log('mongodb connection error:', err);
});
Mongo.once('open', function () {
  console.log('mongodb connection open!');
});



router.get('/', function(req,res,next){
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.post('/add', function(request, response, next){
  var kitty = new Cat({name: request.body.name});
  kitty.save(function(err){
    if (err) {
      console.log('meow %s', err);
    }
    response.send(kitty.toJSON());
    next();
  });
});

router.get('/cats', function(request, response, next){
  Cat.find({}).exec(function(err, cats){
    if (err) {
      throw new Error(err);
    }
    response.send(JSON.stringify(cats));

    next();
  });
});

module.exports = router;
