var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant', require('../models/restaurant'));

var api={
	restaurants: function(req,res){
		Restaurant.find({}).exec(function(err,result){
		res.send(result);
	});

	},
	restaurants_id:function(req,res){
		var id= req.params.id;

		Restaurant.find({
			_id:id
		})
		.exec(function(err,result){
			res.send(result);
		})
	},
	restaurants_id_cat: function(req,res){
		var id = req.params.id;
		var cat = req.params.cat;

		Restaurant.find({
			_id:id,
		})
		.exec(function(err,result){
			if(err) res.send(err);
			res.send(result[0].menu[cat]);
		})

	},
	pay: function(req,res){

	}
}

module.exports= api;