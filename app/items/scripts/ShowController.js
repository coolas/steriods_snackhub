angular
  .module('items')
  .controller('ShowController', function($scope, supersonic) {
  	var itemId = steroids.view.params["id"];

  	// Fetch menuItem given the id (API)
  	$scope.item = {
		"id": 1,
		"name": "Burger Mcdo",
		"created_at": "2017-02-05T09:37:43.000Z",
		"updated_at": "2017-02-05T09:37:43.000Z",
		"description": "Description Burger Mcdo"
	};

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
