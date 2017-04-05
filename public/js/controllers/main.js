var app = angular.module('blogController', []);

app.controller('mainController', ['$scope','$http','Articles', function($scope, $http, Articles){
	// this isnt needed 
	$scope.formData = {}; 
	Articles.get()
		.success(function(data){
			console.log(data);
			$scope.articles = data; 
		}); 



}]);