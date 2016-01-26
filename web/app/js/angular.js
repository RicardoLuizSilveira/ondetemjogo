angular.module("ondetemjogo", ["ngRoute"]);

angular.module("ondetemjogo").controller("loginController", function ($scope) {
	$scope.efetuarLogin = function (login) {
		console.log($scope.login);
	}

});

angular.module("ondetemjogo").controller("dashboardController", function ($scope) {

});

angular.module("ondetemjogo").controller("welcomeController", function ($scope) {

});