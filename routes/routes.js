module.exports = function(app){
	app.post("/:task/css",function(req,res){
		console.log(req.body);
		files[req.params.task] = req.body.name;
		gulp.start(req.params.task,function(err){
			console.log("err",err);
			//http://stackoverflow.com/questions/7042340/node-js-error-cant-set-headers-after-they-are-sent
			res.send("done");
		});
	});
};