var myApp = angular.module('myApp');

myApp.controller('adminResturant', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('adminResturant loaded...');
        $scope.addResturant=function(){
            console.log('inside add Resturant'); 
            var data=$scope.resturant;
            console.log(data);
                $http.post('/api/addResturant/',data).success(function(response){
			     window.location.href='#/';
		         });
         }
}]);res