var module;

module = angular.module("MallMethods", ['MallModel']);

module.factory("MallService", function(MallRestangular){
	return {
		fetchMalls: function(){
			return MallRestangular.one("api/malls").customGET();
		}

	}
});