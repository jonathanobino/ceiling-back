var express = require("express");
var mongoose = require("mongoose");
var config = require('./config/config');
var restaurant = require('./models/restaurant');
var app = express();

var dbUrl = config.base + config.user+":"+config.psw+config.uri;

mongoose.connect(dbUrl,function(err){
	if(err) console.log(err);
	console.log('connected');
});


app.get('/', function(req,res){
	res.send("It's working!");
})



var server = app.listen(3000);

