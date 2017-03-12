var module;

module = angular.module("UserMethods", ['UserModel']);

module.factory("UserService", function(UserRestangular){
	return {
		fetchUser: function(id){
			return UserRestangular.one("api/users/" + id).customGET();
		}, 
		register: function(user){
			return UserRestangular.one("api/auth/register").customPOST();
		}

	}
});