var router = require("express").Router();

router.get('/', function(request, response){

  console.log("Here you go!");
  request.send('Hey!');
});

module.exports = router;
