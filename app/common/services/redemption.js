var module;

module = angular.module("RedemptionMethods", ['RedemptionModel']);


module.factory("RedemptionService", function(RedemptionRestangular){
	return {
		fetchRedemption: function(id){
			return RedemptionRestangular.one("api/redemptions/" + id).customGET();
		},
		fetchRedemptions: function(){
			return RedemptionRestangular.one("api/redemptions").customGET();
		},
		fetchUserRedemptions: function(user_id){
			return RedemptionRestangular.one("api/redemptions?user_id="+user_id).customGET();
		},
		createRedemption: function(redemption){
			return RedemptionRestangular.one('api/redemptions').customPOST(redemption);
		}

	}
});