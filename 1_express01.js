var http=require('http');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

//app.port = 3000; port 는 속성이므로 이렇게 쓸 수 있다. 단, 이렇게 쓰면 빼서 쓸때도 app.port 로 쓴다.

var server = http.createServer(app);

server.listen(app.get('port'), function(){
    console.log("익스프레스 서버를 시작했습니다 : " +app.get('port'));
})
