angular
	.module('welcome')
	.controller('IndexController', function($scope, supersonic, $localStorage, $ionicLoading, AuthService) {

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
			// AuthService.login($scope.email, $scope.password, (function(_this){
			// 	return function(resp){

			// 	};
			// })(this));
			// return

			// $ionicLoading.show({
			// 	template: 'Loading...',
			// 	duration: 3000
			// });

	  //      AuthService.login($scope.email, $scope.password, (function(_this){
			// 	//steroids.view.displayLoading();
			// 	return function(resp){
			// 		alert(JSON.stringify(resp));
			// 	};
			// })(this));

			AuthService.login($scope.email, $scope.password, (function(_this){ console.log(_this); })(this));



			return
			// $ionicLoading.show({
		 //      template: 'Loading...',
		 //      duration: 3000
		 //    }).then(function(){
		 //       console.log("The loading indicator is now displayed");
		 //       AuthService.login($scope.email, $scope.password, (function(_this){
			// 		steroids.view.displayLoading();
			// 		return function(resp){
			// 			alert(JSON.stringify(resp));
			// 		};
			// 	})(this));
			// 	return
		 //    });

		}

		$scope.register = function() {
			AuthService.register($scope.user, (function(_this){
				return function(resp){
					alert(JSON.stringify(resp));
				};
			})(this));
			return
		}
	});