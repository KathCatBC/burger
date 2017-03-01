var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var actor = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	actor.all(function(data){
		res.render('burgers/index', { burgers: data} )
	})
	
});



router.get("/new", function(req, res) {
	res.render('burgers/new');
});

router.post("/create", function(req, res){
	// res.send(req.body);
	var cols = ['burger_name', 'devoured'];
	var vals = [req.body.burgername, false];

	movie.create(cols, vals, function(response){
		res.redirect('/burgers');
	});
})


// Export routes for server.js to use.
module.exports = router;