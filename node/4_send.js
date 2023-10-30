var http = require('http');
var express = require('express');

var app = express();
var server = http.createServer(app);

app.set('port',process.env.PORT || 3000);
server.listen(app.get('port'), function(){
    console.log("Express Server Started : " + app.get('port'));
})

// app.use(function(next)) 이렇게 쓰면 오류난다.
app.use(function(req, res, next){
    console.log("첫번째 미들웨어 호출됨");
    next();
})

app.use(function(req, res, next){
    console.log("두번째 미들웨어 호출됨");
    //res.send("<h1>서버로 부터의 응답</h1>");

    // java script 객체 (json)를 이용해서 보낼 수 도 있다. : 를 사용하는 것에 주의
    // send 를 사용하면 java script 객체를 문자열로 바꿔서 보내지게 된다. 
    var person = {name:"소녀시대", members:12};
    res.send(person);
    
    // 내부적으로는 아래와 같은 코드로 변환되어 실행된다.
    // var personStr = JSON.stringify(person);
    // res.send(personStr);
})



