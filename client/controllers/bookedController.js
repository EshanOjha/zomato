myApp.controller('bookedController', ['$scope', '$http', '$location','$routeParams', function($scope, $http, $location, $routeParams){
      console.log('bookedController run')
   
      $scope.getBookedResturant= function(){
        $http.get('/api/bookedResturant').success(function(response){
            console.log(response);
           $scope.resturant=response;
        });
	}  
      
          $scope.comment = [];
                $scope.btn_add = function() {
                    if($scope.txtcomment !=''){
                    $scope.comment.push($scope.txtcomment);
                    $scope.txtcomment = "";
                    }
                }

                $scope.remItem = function($index) {
                    $scope.comment.splice($index, 1);
                }
                
                
}]);
