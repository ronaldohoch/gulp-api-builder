var express = require("express");
	bodyParser = require('body-parser'),
	gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	http = require("http"),
	_ = require("underscore"),
	files={},
	server=false,
	extras = require('express-extras');

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var throttled = _.throttle(function(next){
	console.log("run throttle");
	next();
},5000);
app.use("/",function(req,res,next){
	console.log("start throttle");
	throttled(next);
});

app.get("/",function(req,res){
	gulp.start('default',function(err){
		console.log("err",err);
		res.send("done");
	});
});
app.get("/:task",function(req,res){
	gulp.start(req.params.task,function(err){
		console.log("err",err);
		res.send("done");
	});
});
app.post("/:task/css",function(req,res){
	console.log(req.body);
	files[req.params.task] = req.body.name;
	gulp.start('custom',function(err){
		console.log("err",err);
		res.send("done");
	});
});

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

gulp.task("uglify",function(){
	return gulp.src(["server.js"])
		.pipe(uglify())
		.pipe(gulp.dest("./min"));
});

gulp.task("custom",function(cb){
	console.log(files);
	return files.custom && gulp.src(files.custom)
		.pipe(uglify().on("error",function(){
			console.error("error");
			cb(null,"ariel!");
		}))
		.pipe(gulp.dest("./min"));
});

gulp.task("close",function(cb){
	server && server.close();
	cb();
});

gulp.task("server",['close'],function(cb){
	server = http.createServer(app).listen(3000,function(){
		console.log("@3000");
	});
	cb();
})

gulp.task("default",["uglify"]);

gulp.task("w",['server'],function(){
	gulp.watch(['gulpfile.js'],['server']);
});

gulp.on("task_stop",function(){
	console.log(arguments);
});