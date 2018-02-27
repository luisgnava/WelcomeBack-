const http = require ('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/',function(req,res){
     res.sendFile('index.html', {
       root: './dist'
     });
});

app.listen(4000, function (){
  console.log(`listening on port 4000`);
});
