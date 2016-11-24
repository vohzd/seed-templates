// Opens App Routes
module.exports = function(app) {

	app.get("/stuff", (req, res) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.json({
			"blargh": "yes"
		});
	});

};  