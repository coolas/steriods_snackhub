angular
.module('redemptions')
.controller('NewController', function($scope, $localStorage, supersonic, RedemptionService) {
		alert(JSON.stringify($scope.redeemCard));
		$scope.redeemCard = function(){ 
			RedemptionService.createRedemption($scope.redemption).then((function(resp){
				


            }), function(resp){
              // error
            });
};

$scope.redemption = { user_id: $localStorage.user.data["id"] }


});