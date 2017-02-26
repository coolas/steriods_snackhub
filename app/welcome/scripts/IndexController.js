angular
	.module('welcome')
	.controller('IndexController', function($scope, supersonic, AuthService) {

		$scope.currentPage = "welcome";
		$scope.user = {};

		$scope.showLogin = function() {
			return $scope.currentPage = "login";
		}

		$scope.showRegister = function() {
			return $scope.currentPage = "register";
		}

		$scope.showWelcome = function() {
			return $scope.currentPage = "welcome";
		}

		$scope.login = function() {
			alert("was here")
			AuthService.login($scope.email, $scope.password, (function(_this){
				return function(resp){

				};
			})(this));
			return
		}
	});