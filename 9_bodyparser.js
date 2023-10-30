var http = require('http');
var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use(function(req,res,next){
    console.log("첫번째 미들웨어 호출됨");


    // get 방식 요청
    // localhost:3000?name=Henry 로 요청시
    var userAgent = req.header('User-Agent');
    var paramName = req.query.id || req.body.id;

    // post 방식 요청
    // body-parser 사용


   // console.log('User-Agent:' + userAgent);
    console.log('paramName:'+paramName);

    res.send('<h2>서버에서 응답</h2>'
            +'<br>'
           // +'<h3> User-Agent : ' + userAgent + '</h3>'
            +'<br>'
            +'<h3> ParamName : ' + paramName + '</h3>');

});

var server = http.createServer(app);

server.listen(app.get('port'),function()
{
    console.log('Server Started : ' + app.get('port'));
})