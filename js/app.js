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
		console.log('You have saved');
	};
	
	$scope.todos = [
		{"name": "Lift At ECC"},	
		{"name": "Clean Room"},
		{"name": "Order United MPE Card"},
		{"name": "Make a post"},
		{"name": "New Money Comedy"},
		{"name": "King Soopers Run"}	
	]

});