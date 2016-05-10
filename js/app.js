//2nd parameter includes dependencies. Its empty so angular knows to create it.
var app = angular.module("todoListApp", []);

app.run(function($rootScope) {
	$rootScope.name = 'You did it right';		
});