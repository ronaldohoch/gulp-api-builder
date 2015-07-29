module.exports = function(gulp){
	gulp.task("uglify",function(){
		return gulp.src(["server.js"])
			.pipe(uglify())
			.pipe(gulp.dest("./min"));
	});
	gulp.task("custom",function(cb){
		// console.log(files);
		return files.custom && gulp.src(files.custom)
			.pipe(uglify().on("error",function(){
				// console.error("error");
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
}