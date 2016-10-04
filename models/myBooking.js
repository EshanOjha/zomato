var mongoose = require('mongoose');

//Booking Schema
var bookingSchema = mongoose.Schema({
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
     checkinDate:{
     type:Date,
      required:true
    },
    min_occupancy:{
       type: Number,
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

var mybooking = module.exports = mongoose.model('bookedResturant',bookingSchema,'myResturant');


// book resturatn
module.exports.bookResturant = function(bookedResturant, callback){
	mybooking.create(bookedResturant, callback);
}


// Get allBooked Resturant
module.exports.getAll = function(callback, limit){
	mybooking.find(callback).limit(limit);
}

