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
				showOverlap(event);
			};

			function showOverlap(event) {
				var elWidth = $(event.target).width();
				var b1 = $(".rectangle-item")[0],
					b2 = $(".rectangle-item")[1],
					x1 = $(b1).position().left,
					y1 = $(b1).position().top,
					x2 = $(b2).position().left,
					y2 = $(b2).position().top;
				var dx = Math.abs(x1 - x2);
				var dy = Math.abs(y1 - y2);

				var v;
				var c = $("#operlap");

				if (dx < elWidth && dy < elWidth) {
					c.css({
						'width': elWidth - dx,
						'height': elWidth - dy,
						'background-color': "green",
						"position": "absolute",
						"left": x1 > x2 ? x1 + 1 : x2 + 1,
						'top': y1 > y2 ? y1 + 1 : y2 + 1
					});

					v = (elWidth - dx) * (elWidth - dy);
				} else {
					v = 0;
					c.css({
						'width': 0,
						'height': 0
					});
				}

				setOverlayValue(v);
			};

			function setOverlayValue(v) {
				$("#operlap-area span").text(v);
			};

		}
	}
}]);