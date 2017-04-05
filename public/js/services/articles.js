angular.module('blogService', [])

.factory('Articles', ['$http', function($http){
	return {
		get: function(){
			return $http.get('/api/articles'); 
		}, 

		create: function(articleData){
			return $http.post('/api/articles'); 
		}, 

		delete: function(id){
			return $http.delete('/api/articles' + id); 
		},

		getPage: function(page){
			return $http.get('/api/articles' + page);
		}


	}
}]);