var url = require('url');

var str = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EA%B9%80%EC%A0%95%ED%99%98';
var urlstring = url.parse(str);
//console.dir(urlstring);
console.log(urlstring.query);


var u1 = url.format(urlstring);
console.log('url->' + u1);


var querystring = require('querystring');
var r1 = querystring.parse(urlstring.query);
console.log(r1);
