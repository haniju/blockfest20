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
