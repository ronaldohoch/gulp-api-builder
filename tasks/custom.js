module.exports = function(gulp){
	gulp.task("custom",function(cb){
		console.log("dest[req.params.task]",dest.custom);
		return files.custom && gulp.src(files.custom)
			.pipe(uglify().on("error",function(){
				// console.error("error");
				cb(null,"ariel!");
			}))
			.pipe(gulp.dest(dest.custom));
	});
}