var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var candies = [
{"id":1,"name":"Chewing Gum","color":"Red"},
{"id":2,"name":"Pez","color":"Green"},
{"id":3,"name":"Marshmallow","color":"Pink"},
{"id":4,"name":"Candy Stick","color":"Blue"}
];

var router = express.Router();

var stringCandy = JSON.stringify(candies);
//What would need to go into candies
//in order to pass our first test?

//1
router.get('/', function(req,res) {
	res.json(candies);
	console.log('index is complete');
	//res.JSON(candies);
});

//2
router.get('/:number', function(req,res){

	res.json(candies[req.params.number-1]);
	console.log('step two get with an id complete');
});

//3 http://localhost:3000/candies POST
// add a new candy
router.post('/', function(req, res){
	candies.push(req.body);
	res.json(req.body);
	console.log("post response is complete");
});
//4 is redundant
//5 PUT http://localhost:3000/candies/3
// update a candy
router.put('/:number', function(req,res){
	//req.body is the request coming in's body, storing it in the right candy arrya object
	candies[req.params.number-1] = req.body;
	res.json(candies[req.params.number-1]);
	console.log('put sucessfully updated it');
});

router.delete('/:id', function(req,res){

	candies.forEach(function(currentEl, index){
		if(currentEl.id == params.id){
			var indexLocation = req.params.id-1;
			candies.splice(indexLocation, 1);
			res.json('message d');
		}
	});
	
});


module.exports = router; //connected to var router = express.Router();