var module;

module = angular.module('Authentication', ['restangular']);

module.factory('AuthService', function(Restangular, $localStorage){
	return {
		login: function(email, password, callback){
			return Restangular.oneUrl('login', BASE_URL + '/api/v1/auth/sign_in').customPOST({
				email: email,
				password: password
			}).then((function(resp){
				$localStorage.user = resp;
				alert(JSON.stringify(resp));
				window.postMessage({
					message: 'userHasLoggedIn',
					user: resp
				});
				if(callback){
					return callback();
				}
			}), function(resp) {
				console.log('error', resp);
				return ('Invalid email or password');
			});
		},

		// logout: function() {
		// 	$localStorage.$rest({
		// 		user: null,
		// 		hasBeenHere: true
		// 	});
		// 	return window.postMessage({
		// 		message: 'userHasLoggedOut'
		// 	});
		// },
		// isLoggedIn: function(){
		// 	var user;
		// 	user = angular.fromJson($localStorage.user || {});
		// 	if(user.user_id){
		// 		return true;
		// 	}
		// 	else {
		// 		return false;
		// 	}
		// }
		// loggedAsChain: function(){
		// 	return this.currentUser().currentChainId;
		// },
		// currentUser: function(){
		// 	var user;
		// 	user = angular.fromJson($localStorage.user || {});
		// 	return user;

		// }
	}

});