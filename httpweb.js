var http = require('http');
var server = http.createServer(
    function(req,res)
    {
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
        res.write("<!DOCTYPE html");
        res.write("<html>");
        res.write(" <head>");
        res.write("     <title>응답 페이지</title>");
        res.write(" </head>");
        res.write(" <body>");
        res.write("     <h1>CreateServer : Response page from Node.js</h1>");
        res.write(" </body>");
        res.write("</html>");
        res.end();
    }
);
var port = 3000;
server.listen(port, ()=>
{
    console.log('Web Server Started...');
 
})

server.on('connection', ()=>
{
    console.log('someone connected!');
   
})

/*
server.on('request', function(req, res)
{
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    res.write("<!DOCTYPE html");
    res.write("<html>");
    res.write(" <head>");
    res.write("     <title>응답 페이지</title>");
    res.write(" </head>");
    res.write(" <body>");
    res.write("     <h1>Response page from Node.js</h1>");
    res.write(" </body>");
    res.write("</html>");
    res.end();
})
*/


