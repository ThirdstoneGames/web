var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
app.set('port', process.env.PORT||3000);

app.use(function(req, res, next){
    console.log("First Middle Ware");
    next();
})

app.use(function(req, res, next){
    console.log("Second Middle ware");
    
    var person = {name:"girl's generation", members:10};
    // head 를 application/json 으로 세팅해서 write 로 보낼때는 JSON.stringify 를 안쓰면 에러 난다. 
    var personStr = JSON.stringify(person);
    res.writeHead(200, {"Content-Type":"application/json;charset=utf8"});
    res.write(personStr);
    res.end();
})

server.listen(app.get('port'), function(){
    console.log("Server started : " + app.get('port'));
})

