var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/resturant/add',{
		controller:'adminResturant',
		templateUrl: 'views/add_resturant.html'
	})
    .when('/resturant', {
		controller:'resturantController',
		templateUrl: 'views/resturant.html'
	})
    .when('/', {
		controller:'resturantController',
		templateUrl: 'views/resturant.html'
	})
    .when('/bookResturant/:id',{
        controller:'resturantController',
        templateUrl:'views/book_resturant.html'
    })
    .when('/myBookings',{
        controller:'bookedController',
        templateUrl:'views/myBookings.html'
    })
    .otherwise({
		redirectTo: '/'
	});
});