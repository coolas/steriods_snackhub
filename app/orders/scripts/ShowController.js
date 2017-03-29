angular
  .module('orders')
  .controller('ShowController', function($scope, $localStorage, supersonic, OrderService,OrderItemService) {
  	var orderId = steroids.view.params["id"];

  	// Fetch Order given the id (API)
  	OrderService.fetchOrder(orderId).then((function(resp){
      $scope.order = resp;
  	  return $scope.order;
  	}), function(resp){
  		return console.log("error", resp);
  	});

  	// Fetch OrderItems
  	OrderItemService. fetchOrderItems(orderId).then((function(resp){
  		$scope.order_items = resp;
  		return $scope.order_items;
  	}), function(resp){
  		return console.log("error", resp);
  	});

    $scope.showAccount = function() {
      var webView = new steroids.views.WebView("app/account/account.html");
      steroids.layers.push({view: webView, navigationBar: false});
      return;
    };

    $scope.goBack = function() {
      steroids.layers.pop();
      return;
    };

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
