var http = require("http");
var fs = require("fs");

var server = http.createServer();
var port = 3000;
server.listen(port, ()=>
{
    console.log("Server Start..");
})

server.on('request', function(req, res)
{
    console.log("클라이언트 요청이 들어왔습니다");

    var filename = "icon.jpg";
    var infile = fs.createReadStream(filename, {flags:'r'});
    var filelength = 0;
    var curlength = 0;

    fs.stat(filename, function(err, stats) {
        filelength = stats.size;
    })

    res.writeHead(200, {"Content-Type":"imgae/jpg"});
    
})
