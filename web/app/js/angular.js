angular.module("ondetemjogo", ["ngRoute"]);

angular.module("ondetemjogo").controller("loginController", function ($scope) {
	$scope.efetuarLogin = function (login) {
		console.log($scope.login);
	}

});

angular.module("ondetemjogo").controller("dashboardController", function ($scope) {

});

angular.module("ondetemjogo").controller("welcomeController", function ($scope) {
	$(function() {
		$('a.scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href').replace("#/index","")).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
});