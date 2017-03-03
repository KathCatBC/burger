var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	burger.all(function(data){
		res.render('index', { burgers: data} )
	})
	
});



// router.get("/new", function(req, res) {
// 	res.render('burgers/new');
// });

router.post("/create", function(req, res){
	// res.send(req.body);
	var cols = ['burger_name', 'devoured'];
	var vals = [req.body.burgername, false];

	burger.create(cols, vals, function(response){
		res.redirect('/burgers');
	});
})


router.put("/update", function(req, res){
	console.log('put');
});


// Export routes for server.js to use.
module.exports = router;