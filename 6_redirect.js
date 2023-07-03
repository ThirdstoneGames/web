var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.set('port', process.env.PORT||3000);

app.use(function(req, res, next){
    console.log("First middleware called");
    res.redirect('http://google.co.kr');
})

server.listen(app.get('port'), function(){
    console.log("Server Started : " + app.get('port'));
})

