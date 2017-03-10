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
			var startX = 0,
				startY = 0,
				x = 0,
				y = 0;

			var overlapValue;

			//TODO drag
			element.on('mousedown', function(event) {
				event.preventDefault();
				startX = event.pageX - x;
				startY = event.pageY - y;
				$document.on('mousemove', mousemove);
				$document.on('mouseup', mouseup);
			});

			function mousemove(event) {
				x = event.pageX - startX;
				y = event.pageY - startY;
				$(element).css({
					top: y + 'px',
					left: x + 'px'
				});
			};

			function mouseup() {
				$document.off('mousemove', mousemove);
				$document.off('mouseup', mouseup);
				showOverlap();
			};



			//TODO overlap
			function showOverlap() {
				var v;

				setOverlayValue(v);
			};

			function setOverlayValue(v) {

			};

		}
	}
}]);