var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var data = require('../database/index.js');

app.use(bodyParser.json());
 app.use(express.static(__dirname + '/../src/components'));

<<<<<<< 98b57f9aeda700f3095dce3abd7acfe128a2e9ed
app.get('/paisa', function(req,res){
  data.getComment((err,results)=>{
if(err){
  console.log('error')
  res.sendStatus(500);
}else{
  res.status(200).json(results)
}
})
} )

app.post('/paisa', function(req,res){
  let comment =req.body.comment
  if(!comment){
    res.sendStatus(400);

  }else{
    data.postComment(comment,(err,results)=>{
      if(err){
        res.sendStatus(500);

      }else{
        res.status(200).json(results);
      }
    })
  }
})

=======
//get request
app.get(bodyParser.json());
app.get('/', function(req, res){
  res.send();
});
>>>>>>> merged files conflict is no longer a conflict


app.listen(3000, () => {
  console.log('listening on 3000')
})
