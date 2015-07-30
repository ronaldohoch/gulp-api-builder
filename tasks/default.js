module.exports = function(gulp){
	gulp.task("close",function(cb){
		server && server.close();
		cb();
	});
	gulp.task("server",['close'],function(cb){
		server = app.listen(3000,function(){
		// server = http.createServer(app).listen(3000,function(){
			console.log("@3000");
		});
		cb();
	})
	// gulp.task("default",["uglify"])s;
	gulp.task("w",['server'],function(){
		gulp.watch(['gulpfile.js'],['server']);
	});
	gulp.on("task_stop",function(){
		// console.log(arguments);
	});
};