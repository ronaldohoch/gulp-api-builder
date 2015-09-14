module.exports = function(app){
	
	var bodyParser = require('body-parser'),
		_ = require("underscore");
	
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
};