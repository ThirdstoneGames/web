var http = require('http');
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var cookieparser = require('cookie-parser');
var expressSession = require('express-session');
var port = 3000;

app.use(express.static('public'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(cookieparser());
app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));

var router = express.Router();

router.route('/process/product').get(function(req,res){
    console.log('/process/product 라우팅 함수 호출됨');

    if(req.session.user)
    {
        res.redirect('/public/product.html');
    } 
    else
    {
        res.redirect('/public/login.html');
    }
});

router.route('/process/setUserCookie').get(function(req,res){
    console.log("/process/setUserCookie 라우팅 함수 호출됨");

    res.cookie('user',
    {
        id:'mike',
        name:'Girl-generation',
        authorized:true
    });

    res.redirect('showCookie');
})

router.route('/process/showCookie').get(function(req,res){
    console.log("/process/showCookie 라우팅 함수 호출됨");
    res.send(req.cookies);
})

router.route('/login/:name').post(function(req,res){
    console.log('/login 라우팅 함수에서 받음');
    var paramid = req.body.id;
    var paramname = req.params.name;
    res.send('<h1>서버에서 받음</h1>'
    + '<br>'
    + '<h2> ID : ' + paramid + '</h2>'
    + '<h2>' + paramname + '</h2>');
})
app.use('/',router);

app.all('*', function(req,res){
    res.status(404).send('<h1>요청하신 페이지는 찾을 수 없습니다.</h1>')
}
)

app.listen(port, function(){
    console.log('server listening : ' + port);
})
