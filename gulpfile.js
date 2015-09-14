var express = require("express"),
	gulp = require("gulp"),
	app = express(),
	confs = require("./confs.js");

require("./configs.js")(app);
require("./routes/routes.js")(app,confs,gulp);
require("./tasks/tasks.js")(gulp,app,confs);