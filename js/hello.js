angular.module('todoListApp')
.directive('helloWorld', function() {
	return {
		template: "Hello Directive",
		restrict: "E" //only use this as an element
	};
});