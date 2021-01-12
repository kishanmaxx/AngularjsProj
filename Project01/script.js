var app = angular.module("ksole",['ngRoute'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
 $locationProvider.hashPrefix('');
  $routeProvider.
  when('/main',{
    templateUrl:'main.html',
    controller:'MainCtrl'
  }).
  when('/about',{
    templateUrl:'about.html',
    controller:'MainCtrl'
  }).
  when('/contact',{
    templateUrl:'contact.html',
    controller:'ContactCtrl'
  }).
  when('/services',{
    templateUrl:'services.html',
    controller:'ServicesCtrl'
  }).
  otherwise({redirectTo:'/main'})
}])
.controller('MainCtrl',['$scope','$http',function($scope,$http){

	$http.get('services.json').then(function(response){
		console.log(response);
		$scope.services = response.data;
	});
}])
.controller('ContactCtrl',['$scope','$http',function($scope,$http){
  console.log("This is the Main controller");
  	$http.get('location.json').then(function(response){
		console.log(response);
		$scope.location = response.data;
	});
}])
.controller('ServicesCtrl',['$scope','$http',function($scope,$http){

	$http.get('services.json').then(function(response){
		console.log(response);
		$scope.services = response.data;
	});
  console.log("This is the Main controller");
}]);
