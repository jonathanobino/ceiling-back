var express = require("express");
var mongoose = require("mongoose");
var config = require('./config/config');
var Restaurant = mongoose.model('Restaurant', require('./models/restaurant'));
var api = require('./api/api');
var app = express();

var dbUrl = config.base + config.user+":"+config.psw+config.uri;

mongoose.connect(dbUrl,function(err){
	if(err) console.log(err);
	console.log('connected');
});


app.get('/', function(req,res){
	var new_res = new Restaurant({
		name:"H-farm",
		address:"Via Sile",
		city:"Roncade",
		menu:{
			sides:[{
				name: "Insalata",
				price:"$10.00"
			}]
		}
	});

	new_res.save(function(err,new_res){
		if(err){
			res.send(err);
		}
		else{
			res.send(new_res)
		}
	})
});

app.get('/restaurants', api.restaurants);

app.get('/restaurants/:id',api.restaurants_id);

app.get('/restaurants/:id/:cat', api.restaurants_id_cat);



var server = app.listen(3000);

