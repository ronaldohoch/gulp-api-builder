var express = require("express"),
	bodyParser = require('body-parser'),
	gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	http = require("http"),
	_ = require("underscore"),
	files={},
	dest={},
	server=false,
	app = express();

require("./configs.js")(app);
require("./routes/routes.js")(app);
require("./tasks/tasks.js")(gulp);