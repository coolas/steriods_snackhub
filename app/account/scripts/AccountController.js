angular
	.module('account')
	.controller('AccountController', function($scope, $localStorage, supersonic, AuthService) {
		$scope.email = $localStorage.user.data["email"];
		$scope.first_name = $localStorage.user.data['first_name'];
		
		$scope.showHistory = function(){
			var webView = new steroids.views.WebView("app/account/history.html");
     	 steroids.layers.push({view: webView, navigationBar: false});
     	 return;
		};

		$scope.logout = function(){
			AuthService.logout();

		var webView = new steroids.views.WebView("app/welcome/index.html");
     	 steroids.layers.push({view: webView, navigationBar: false});
     	 return;
		};

		$scope.home = function() {
			var webView = new steroids.views.WebView("app/orders/new.html");
     	 steroids.layers.push({view: webView, navigationBar: false});
     	 return;
		};

	    $scope.goBack = function() {
	      steroids.layers.pop();
	      return;
	    };


	

		
	});