module.exports = function(gulp){
	gulp.task("custom",function(cb){
		return files.custom && gulp.src(files.custom)
			.pipe(uglify().on("error",function(){
				cb(null,"ariel!");
			}))
			.pipe(gulp.dest(dest.custom));
	});
}