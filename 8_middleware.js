var http = require('http');
var express = require('express');
var static = require('serve-static');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);

//app.use(static(path.join(__dirname, 'public')));
app.use(static('/public',path.join(__dirname, 'public')));
app.use(function(req, res, next)
{
    console.log('첫번째 미들웨어 호출됨');

    // get 방식에 대한 요청. parameter 를 받을 때 이렇게 한다.
    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;

    res.send('<h3>서버에서 응답. User-Agent -> ' + userAgent + '/<h3>');
})

var server = http.createServer(app);
var listen = server.listen(app.get('port'),function(){
    console.log("server Started");
})