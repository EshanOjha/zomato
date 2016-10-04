myApp.controller('resturantController', ['$scope', '$http', '$location','$routeParams', function($scope, $http, $location, $routeParams){
     $scope.select_occupancy = [1,2,3,4,5,6,7,8,9,10,11,12];
      console.log('resturantController loaded');
      var AllCuisines=[];
   
    $scope.getResturant= function(){
    	$http.get('/api/resturant').success(function(response){
        	$scope.resturant = response;
            
    	});
        console.log('firsApi call completet');
        $http.get('/api/getResturantName').success(function(response){
              console.log('inside getResturantName');
               console.log(response);
        });    
	}
    
    console.log('final');
    console.log(AllCuisines);
    $scope.submitForm=function(){
          var data=$scope.formAData;
         var resturant_id=$routeParams.id;
           var merged={};
        
        $http.get('/api/resturantDetails/'+resturant_id).success(function(response){
			console.log("successful response come in controller");
             var data1=response;
             Object.assign(merged,data,data1);
             console.log(merged);
        
            // calling post to book resturant of given data and occupacy
            $http.post('/bookResturant',merged).success(function(response){
             console.log('Room Booked by user')
			$location.path('/myBookings');
         });
        
        });
    }

}]);
