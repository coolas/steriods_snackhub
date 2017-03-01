angular
  .module('items')
  .controller('ShowController', function($scope, supersonic, ItemService) {
  	var item_id = steroids.view.params["id"];

  	// Fetch menuItem given the id (API)
  	ItemService.fetchItem(item_id).then((function(resp){
  		return $scope.item = resp;
  	}), function(resp){
  		return console.log("error", resp);
  	});

	// window.localStorage["orderItems"] = [];

	// $scope.addToBasket = function(id, quantity, chainId) {

	// 	alert(window.localStorage["orderItems"]);
	// 	window.localStorage["orderItems"] = "hi";
	// 	alert(window.localStorage["orderItems"]);

	// 	var webView = new steroids.views.WebView("app/menus/show.html?chainId=" + 1);
	// 	steroids.layers.push(webView);
	// 	return;
	// };

  });
