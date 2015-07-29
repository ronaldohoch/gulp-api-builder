var express = require("express");
var app = express();

var gulp = require("./gulpfile.js");

app.get("/",function(req,res){
	gulp().start('default',function(err){
		console.log("err",err);
		res.send("done");
	});
});

app.listen("3000",function(){
	console.log("@3000");
});

//Example
// app.use(extras.throttle({
// 	urlCount: 2,
// 	urlSec: 1,
// 	holdTime: 10,
// 	whitelist: {
// 	    '127.0.0.1': false,
// 	    '45.55.227.3': true
// 	},
// 	errorCode: 200,
// 	errorHtml: 'throttle'
// }));