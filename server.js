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