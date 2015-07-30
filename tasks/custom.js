module.exports = function(gulp){
	gulp.task("custom",function(cb){
		// console.log(files);
		return files.custom && gulp.src(files.custom)
			.pipe(uglify().on("error",function(){
				// console.error("error");
				cb(null,"ariel!");
			}))
			.pipe(gulp.dest("./min"));
	});
}