var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

resturant =require('./models/resturant');
myBooking = require('./models/myBooking');

mongoose.connect('mongodb://localhost/resturant');

app.listen(port,function(){
   console.log('our app is running');
});


app.get('/', function(req, res){
   res.send('Please use /api/books or /api/genres');
});


app.post('/api/addResturant',function(req,res){
    var data=req.body;
    resturant.addResturant(data, function(err,data){
		if(err){
			throw err;
		}
        res.json(data);
   });
});



app.get('/api/resturant',function(req,res){
    resturant.getResturant(function(err,data){
       if(err){
           throw err;
       } 
        res.json(data);
    });
      
});



app.get('/api/bookedResturant',function(req,res){
    myBooking.getAll(function(err,data){
       if(err){
           throw err;
       } 
        res.json(data);
    });
      
});


app.get('/api/resturantDetails/:resturant_id',function(req,res){
    var id = req.params.resturant_id;
    resturant.findById(req.params.resturant_id,function(err,data){
              if(err){
                  throw err;
              }
        res.json(data);
        });    
});


app.post('/bookResturant',function(req,res){
    var data=req.body;
    myBooking.bookResturant(data, function(err,data){
		if(err){
			throw err;
		}
        res.json(data);
   });
});