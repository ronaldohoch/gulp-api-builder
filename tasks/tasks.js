module.exports = function(gulp){
	require("./custom.js")(gulp);
	require("./widgets.js")(gulp);
	require("./default.js")(gulp);
}