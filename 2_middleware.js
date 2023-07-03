var http = require('http');
var express = require('express');

var app = express();
app.port = 3000;

// middleware(함수)를 등록. 이 경우 익명함수를 등록
// middleware 는 클라이언트가 접속하면 자동으로 실행되는 듯
app.use(function(req, res, next){
    console.log('첫번째 미들웨어 호출됨');

    // req 객체, res 객체를 이용할 수 있다. 이 함수에서 res 객체를 통해 바로 전송해보자
    // 200 : 정상응답
    // 파라미터로 객체를 넣어줄텐데 
    // Content-Type : 페이지의 유형 결정
    // text/html : 웹 페이지라는것
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
    res.end('<h1>서버에서 응답한 결과입니다. </h1>');

})

var server = http.createServer(app);
server.listen(app.port, function()
{
    console.log("express server Started : " + app.port);
})

// 결과를 크롬 개발자도구를 이용해서 한번 보자.