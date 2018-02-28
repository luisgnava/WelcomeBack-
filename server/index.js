var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
 app.use(express.static(__dirname + '/../src/components'));

//get request
app.get(bodyParser.json());
app.get('/', function(req, res){
  res.send();
});


app.listen(3000, () => {
  console.log('listening on 3000')
})
