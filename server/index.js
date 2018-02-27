var express = require('express');
var app = express();


app.get('/', function(req, res){
  res.send(console.log('hey hola'))
});




app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
