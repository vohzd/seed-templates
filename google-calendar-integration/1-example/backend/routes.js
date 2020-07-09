// Dependencies
//const Mongoose 			= require('mongoose');
//const Skateparks		= require('./model.js');

// Opens App Routes
module.exports = function(app) {

	app.get("/stuff", (req, res) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.json({
			"blargh": "yes"
		});
	});

	// GET Routes
	// --------------------------------------------------------
	// Retreive all skateparks in db
	/*
	app.get('/skateparks', (req, res) => {

		// Uses Mongoose schema to run the search (empty conditions)
		const query = Skateparks.find({});
		query.exec((err, skateparks) => {
		
			// Test for errors
			if(err)	res.send(err);

			// If no errors are found, it responds with a JSON of all skateparks
			res.json(skateparks);
		});
	});

	// Retrieve a particular skatepark
	app.get('/skateparks/:id', (req, res) => {

		const q = { "_id": req.params.id};

		Skateparks.findOne(q, (err, doc) => {

			if (err) return res.send(500, { error: err });
			
			// If no errors are found, return matching record
			res.json(doc);

   		 });

	});

	// POST Routes
	// --------------------------------------------------------
	// Provides method for saving new skateparks to the db
	app.post('/skateparks', (req, res) => {

		console.log("you are here");
		// Creates a new skatepark based on the Mongoose Schema
		const newSkatepark = new Skateparks(req.body);

		console.log(req);

		// New skatepark is saved to the db
		newSkatepark.save((err) => {
			
			// Test for errors
			if(err) res.send(err);

			// If no errors are found, it responds with the _id of the newly saved obj
			res.json(newSkatepark._id);
		});
	});

	// PUT Routes
	// --------------------------------------------------------
	// Method for updating a particular skatepark
	app.put("/skateparks/:id", (req, res) => {

		// what is the id of the document you want to update?
		const q = { "_id": req.params.id};
		// what is the content you want to update the document with?
		const b = req.body;

		// call findOneAndUpdate with the info required
		Skateparks.findOneAndUpdate(q, b, (err, doc) => {

			if (err) return res.send(500, { error: err }); // bad times

			res.json(b);

		});


	});

	*/
};  