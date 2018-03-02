var express = ('express');
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: 'Holacode',
  database: "paisa"
});


con.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})


  //user
  var newUserName = function(cb){
  con.query('INSERT INTO user(userName) VALUES(?)',[userName],(err,results,field) =>{
    if(err) {
       cb(err, null);
     } else {
       console.log(results);
       cb(null, results);
     }
  })
}


//comments
  var postComment = function(cb){
  con.query('INSERT INTO comments(comment) VALUES(?)',[comment],(err,results,fields) =>{
    if(err){
       cb(err, null);
     } else {
       console.log(results);
       cb(null, results);
     }
  })
}

  var getComment = function(cb){
    con.query('SELECT comment FROM comments',(err,results,field) =>{
      if(err){
         cb(err, null);
       } else {
         console.log(results);
         cb(null, results);
       }
    })
  }
//reply
  var postReply = function(cb){
  con.query('INSERT INTO reply(reply) VALUES(?)',[reply],(err,results,fields) =>{
    if(err){
       cb(err, null);
     } else {
       console.log(results);
       cb(null, results);
     }
})
}

  var getReply = function(cb){
    con.query('SELECT reply FROM reply',(err,results,fields) =>{
      if(err){
         cb(err, null);
       } else {
         console.log(results);
         cb(null, results);
       }
    })
  }
  module.exports.newUserName = newUserName;
  module.exports.postComment = postComment;
  module.exports.getComment = getComment;
  module.exports.postReply = postReply;
  module.exports.getReply = getReply;
