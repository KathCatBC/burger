var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	burger.all(function(data){
		console.log(data)
		res.render('index', { burgers: data} )
	})
	
});


router.post("/create", function(req, res){
	console.log(req.body);
	var cols = ['burger_name', 'devoured'];
	var vals = [req.body.burgername, false];

	burger.create(cols, vals, function(response){
		res.redirect('/');
	});
})


router.put("/update/:id", function(req, res){
	
	burger.update({devoured: true}, "id=" + req.params.id, function(){
			res.redirect("/")	
	});
});


// Export routes for server.js to use.
module.exports = router;