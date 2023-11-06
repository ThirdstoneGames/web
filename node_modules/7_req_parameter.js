var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.set('port',process.env.PORT||3000);

// localhost:3000/?name=henry 로 했을 때. 
app.use(function(req,res,next){
    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;

    var result = {
        'UserAgent':userAgent,
        'ParamName':paramName
    };

    res.send(result);
})


server.listen(app.get('port'),function(){
    console.log("Server Started " + app.get('port'));
})
