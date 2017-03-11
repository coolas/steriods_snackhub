angular
  .module('orders')
  .controller('ShowController', function($scope, $localStorage, supersonic, OrderService) {
  	var orderId = steroids.view.params["id"];

  	// Fetch Order given the id (API)
  	OrderService.fetchOrder(orderId).then((function(resp){
      $scope.order = resp;
  	  return $scope.order;
  	}), function(resp){
  		return console.log("error", resp);
  	});

  	// Fetch menuItem given the id (API)
 //  	$scope.orderId = {
	// 	"id": 1,
	// 	"reference_number",
	// 	"total",
	// 	"created_at": "2017-02-05T09:37:43.000Z",
	// 	"updated_at": "2017-02-05T09:37:43.000Z",
	// 	"cinema_number",
	// 	"remarks"

	// };

	

  });
