//The OG
//2nd parameter includes dependencies. Its empty so angular knows to create it.
// angular.module("todoListApp", [])
// .controller('mainCtrl', function($scope) {
// 	$scope.helloWorld = function() {
// 		console.log('This is the hello world controller function.');
// 	};

// });



var app = angular.module('todoListApp', []);
app.controller('mainCtrl', function($scope) {
	$scope.helloWorld = function() {
		console.log('This is the hello world controller function.');
	};

});

app.controller('coolCtrl', function($scope) {
	$scope.whoAmI = function() {
		console.log('We are in the coolCtrl');	
	};
});
