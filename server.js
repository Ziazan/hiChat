//引入express 模块
var express = require('express'),
	app = express(),
	// http = require('http');
	 server = require('http').createServer(app);

// server = http.createServer(function(req,res){
// 	res.writeHead(200, {
// 		'Content-Type': 'text/html'
// 	});
// 	res.write('<h1>hello world!</h1>');
// 	res.end();
// });
 //指定静态html文件的位置
 app.use('/index',express.static(__dirname + '/www'));
 server.listen(80);
 console.log('server started~');

