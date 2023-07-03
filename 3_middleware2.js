var http = require('http');
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next)
{
    console.log("첫번째 미들웨어 호출됨");
    req.name = "mike";
    next();
    

})

app.use(function(req, res, next)
{
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    res.end('<h1>서버에서 응답한 결과입니다 : ' + req.name + '</h1>');

})

var server = http.createServer(app);
server.listen(app.get('port'), function()
{
    console.log("express 서버 시작됨 : " + app.get('port'));
});




