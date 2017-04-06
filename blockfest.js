angular.module("blockfest", []);

angular.module("blockfest").controller
("main", [ "$scope", function ($scope) {

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
} ]);
