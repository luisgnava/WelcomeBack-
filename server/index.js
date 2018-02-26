var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
 app.use(express.static(__dirname + '/../client/dist'));


 //post request
 app.post('/',function(req,res){
   var query = req.body.query;
   var userName = req.body.userName;
   if(!userName){
     res.sendStatus(400)
   }
 })
app.listen(3000, ()=>{
  console.log('listening on 3000')
})
