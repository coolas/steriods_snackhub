angular
	.module('account')
	.controller('HistoryController', function($scope, $localStorage, supersonic, OrderService) {
		$scope.user_id = $localStorage.user.data["id"];
		OrderService.fetchUserOrders($scope.user_id).then((function(resp){
			return $scope.orders = resp;	
		}), function(resp){
			return console.log("error",resp);
		});
		
		$scope.showOrder = function(order_id){
			var webView = new steroids.views.WebView("app/orders/show.html?id="+ order_id);
     	 steroids.layers.push({view: webView, navigationBar: false});
     	 return;
		};
	});