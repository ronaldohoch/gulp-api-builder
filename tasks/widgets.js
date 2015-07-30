module.exports = function(gulp){
	gulp.task("widgets",function(cb){
		return files.widgets && gulp.src(files.widgets)
			.pipe(uglify().on("error",function(){
				cb(null,"ariel!");
			}))
			.pipe(gulp.dest(dest.widgets));
	});
}