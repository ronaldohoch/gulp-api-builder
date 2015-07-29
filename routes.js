module.exports = function(app){
	app.get("/",function(req,res){
		gulp.start('default',function(err){
			// console.log("err",err);
			res.send("done");
		});
	});
	app.get("/:task",function(req,res){
		gulp.start(req.params.task,function(err){
			// console.log("err",err);
			res.send("done");
		});
	});
	app.post("/:task/css",function(req,res){
		console.log(req.body);
		files[req.params.task] = req.body.name;
		gulp.start('custom',function(err){
			// console.log("err",err);
			res.send("done");
		});
	});
};