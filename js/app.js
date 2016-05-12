//The OG
//2nd parameter includes dependencies. Its empty so angular knows to create it.
// angular.module("todoListApp", [])
// .controller('mainCtrl', function($scope) {
// 	$scope.helloWorld = function() {
// 		console.log('This is the hello world controller function.');
// 	};

// });

var app = angular.module('todoListApp', []);
app.controller('mainCtrl', function ($scope, dataService) {
	
	$scope.addTodo = function() {
		var todo = {name: "This is a new todo."};
		$scope.todos.push(todo);
	};
	
	$scope.helloConsole = dataService.helloConsole;

	dataService.getTodos(function(response) {
		console.log(response.data);
		$scope.todos = response.data;
	});
	
	$scope.deleteTodo = function(todo, $index) {
		dataService.deleteTodo(todo);	
		$scope.todos.splice($index, 1);
	};
	
	$scope.saveTodos = function(todo){
		dataService.saveTodos(todo);	
	};
});

app.service('dataService', function($http){
		this.helloConsole = function() {
			console.log('service is working');
		};
		
		this.getTodos = function(callback){ 
			$http.get('mock/todos.json')
			.then(callback)
			console.log(callback);
		};
		
		this.deleteTodo = function(todo) {
			console.log('The', todo.name, 'has been deleted');

		};
		
		this.saveTodos = function(todo) {
			console.log('The', todo.name, 'has been saved');
		}
});