//Did you use npm install to
//add all these packages
//to our project?
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var router = express.Router();

// How do we 'require' the candyRouter file?
var candyRouter = require('./candyRouter');
//we are importing router from other page

app.use(bodyParser.json());
app.use('/candies', candyRouter);

//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use

console.log("candy server is running");
app.listen(port);

