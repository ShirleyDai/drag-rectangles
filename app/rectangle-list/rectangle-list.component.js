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
});