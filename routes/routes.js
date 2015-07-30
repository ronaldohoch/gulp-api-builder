module.exports = function(app){
	app.post("/:task/js",function(req,res){
		// console.log(req.body);
		files[req.params.task] = req.body.name;
		dest[req.params.task] = req.body.dest;
		gulp.start(req.params.task,function(err){
			if(err)
				console.log("err",err);
			//http://stackoverflow.com/questions/7042340/node-js-error-cant-set-headers-after-they-are-sent
			res.end();
			// res.send(dest[req.params.task]);
		});
	});
};