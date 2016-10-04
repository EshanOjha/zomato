var mongoose = require('mongoose');

// Resturant Schema
var resturantSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	website:{
		type: String,
		required: true
	},
	location:{
		type: String,
        required:true
	},
    
	cuisines:{
      type:String,
        required:true
    },
	tables:{
		type: Number,
        required:true
	},
    cost:{
        type:Number,
        required: true
    },
    capacity:{
		type: Number,
        required:true
	},
    image_url:{
		type: String
	}
	
});

var resturant = module.exports = mongoose.model('Resturant',resturantSchema,'resturantDetails');


// Add Resturant
module.exports.addResturant = function(Resturant, callback){
	resturant.create(Resturant, callback);
}


// Find resturant by Id
module.exports.getResturantById = function(id, callback){
	resturant.findById(id, callback);
}

// Get allResturant
module.exports.getResturant = function(callback, limit){
	resturant.find(callback).limit(limit);
}

