var express = require("express");
var mongoose = require("mongoose");
var config = require('./config/config');
var Restaurant = mongoose.model('Restaurant', require('./models/restaurant'));
var app = express();

var dbUrl = config.base + config.user+":"+config.psw+config.uri;

mongoose.connect(dbUrl,function(err){
	if(err) console.log(err);
	console.log('connected');
});


app.get('/', function(req,res){
	// Restaurant.create({
	// 	name:"H-farm",
	// 	address:"Via Sile",
	// 	city:"Roncade"
	// }).save();
	var new_res = new Restaurant({
		name:"H-farm",
		address:"Via Sile",
		city:"Roncade"
	});

	new_res.save(function(err,new_res){
		if(err){
			res.send(err);
		}
		else{
			res.send(new_res)
		}
	})
})



var server = app.listen(3000);

