var module;

module = angular.module("ChainMethods", ['ChainModel']);

module.factory("ChainService", function(ChainRestangular){
	return {
		fetchChain: function(id){
			return ChainRestangular.one("api/chains/" + id).customGET();
		},
		fetchChains: function(mall_id){
			return ChainRestangular.one("api/chains?mall_id=" + mall_id).customGET();
		}

	}
});