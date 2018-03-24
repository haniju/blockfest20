function reload() {
    location.reload();
}
angular.module("blockfest", []);

angular.module("blockfest").controller
("main", [ "$scope", function ($scope) {


	/* dynamic colors */
	var tones  = [ "dark", "bright" ];
	var colors = [
		"mint",
		"lemon",
		"raspberry",
		"green",
		"night",
		"violet"
	];
	$scope.color = colors[Math.floor(Math.random() * colors.length)];
	$scope.tone = tones[Math.random() > 0.5 ? 0 : 1];

	/* dynamic fonts */
	var fonts = [
		"unica",
		"playfair",
		"graduate",
		"francois",
		"squada",
		"oleo",
		"bungee",
		"oswald"
	];
	$scope.font = fonts[Math.floor(Math.random() * fonts.length)];
} ]);

angular.module("blockfest").directive("svg", function() {
	return {
		scope: {
			imgURL: "=svg"
		},
		link: function (scope, element, attributes) {
			imgURL = attributes.svg;
			jQuery.get(imgURL, function(data) {
				var $svg = jQuery(data).find('svg');
				//if(typeof imgID    !== 'undefined') { $svg = $svg.attr('id', imgID); }
				//if(typeof imgClass !== 'undefined') { $svg = $svg.attr('class', imgClass + ' replaced-svg'); }
				$svg = $svg.removeAttr('xmlns:a');
				element.html($svg);
				var paths = element[0].firstChild.children;
				for (var i = 0; i < paths.length; i++) {
					paths[i].setAttribute("fill", "#000000");
				}
			}, 'xml');
		}
	}
});
