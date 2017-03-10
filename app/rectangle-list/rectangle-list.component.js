'use strict';

angular.
module('rectangleList').
component('rectangleList', {
	templateUrl: 'rectangle-list/rectangle-list.template.html',
	controller: function RectangleListController() {
		this.rectangles = [{
			id: '1'
		}, {
			id: '2'
		}];
	}
}).directive('rectangle', ['$document', function($document) {
	return {
		link: function(scope, element, attrs) {

			//TODO drag
			element.on('mousedown', function() {

			});

			function mousemove(event) {

			};

			function mouseup() {

			};



			//TODO overlap
			function showOverlap() {

			};

			function setOverlayValue(v) {

			};

		}
	}
}]);