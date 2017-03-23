var module;

module = angular.module('Authentication', ['restangular']);

module.factory('AuthService', function(Restangular, $localStorage, $ionicLoading, $ionicPopup){
	return {
		login: function(email, password, callback){
			$ionicLoading.show({
				template: 'Loading...',
			});

			return Restangular.oneUrl('login', BASE_URL + '/api/v1/auth/sign_in').customPOST({
				email: email,
				password: password
			}).then((function(resp){
				$localStorage.user = resp;
				// initialize order items
				$localStorage.user.items = [];

				if($localStorage.user.confirmed_at !== null){
					steroids.layers.popAll();
					var webView = new steroids.views.WebView("app/orders/new.html");
					steroids.layers.push({view: webView, navigationBar: false});
				}

				//window.postMessage({
				//	message: 'userHasLoggedIn',
				//	user: resp
				//});
				//if(callback){
				//	return callback();
				//}

			}), function(resp) {
				console.log('error', resp);
				$ionicLoading.hide();
				var error = "<h4 class='text-center'>" + resp.data.errors + "</h4>";
				$ionicPopup.alert({
					template: error
				});
				return
			});
		},

		register: function(user) {
			$ionicLoading.show({
				template: 'Loading...',
			});

			return Restangular.oneUrl('register', BASE_URL + '/api/v1/auth').customPOST({
				email: user.email,
				password: user.password,
				first_name: user.first_name,
				last_name: user.last_name,
				confirm_success_url: "https://vast-stream-69053.herokuapp.com"
			}).then((function(resp){

				//$localStorage.user = resp;
				//$localStorage.user.items = [];

				$ionicLoading.hide();
				var info = "<h4 class='text-center'>Please check registered email for account confirmation link.</h4>";
				$ionicPopup.alert({
					template: info
				});
				//steroids.layers.popAll();
				//var webView = new steroids.views.WebView("app/orders/new.html");
				//steroids.layers.push({view: webView, navigationBar: false});

			}), function(resp) {
				console.log('error', resp);
				$ionicLoading.hide();
				var error = "<h4 class='text-center'>" + resp.data.errors + "</h4>";
				$ionicPopup.alert({
					template: error
				});
				return
			});
		},

		logout: function() {
			$localStorage.user = null;
			// $localStorage.$rest({
			// 	user: null,
			// 	hasBeenHere: true
			// }); 
		}
	}

});