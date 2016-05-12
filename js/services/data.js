'use strict';

angular.module('todoListApp')
	.service('dataService', function ($http) {
		this.helloConsole = function () {
			console.log('service is working');
		};

		this.getTodos = function (callback) {
			$http.get('mock/todos.json')
				.then(callback)
			console.log(callback);
		};

		this.deleteTodo = function (todo) {
			console.log('The', todo.name, 'has been deleted');

		};

		this.saveTodos = function (todos) {
			console.log('The', todos.length, 'todos have been saved');
		}
});