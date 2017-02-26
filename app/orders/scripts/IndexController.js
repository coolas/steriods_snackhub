angular
  .module('orders')
  .controller('IndexController', function($scope, supersonic) {
    var userId = steroids.view.params["id"];
    $scope.orders = [
		{
		"id": 1,
		"name": "Mcdonalds",
		"created_at": "2017-02-05T09:37:43.000Z",
		"updated_at": "2017-02-05T09:37:43.000Z",
		"mall_id": 30
		},
		{
		"id": 2,
		"name": "Jollibee",
		"created_at": "2017-02-05T09:48:01.000Z",
		"updated_at": "2017-02-05T09:48:01.000Z",
		"mall_id": 30
		},
		{
		"id": 3,
		"name": "Mang inasal",
		"created_at": "2017-02-05T09:52:34.000Z",
		"updated_at": "2017-02-05T09:52:34.000Z",
		"mall_id": 30
		}
	];

	$scope.showMenu = function(id) {
		var webView = new steroids.views.WebView("app/menus/show.html?id=" + id);
		steroids.layers.push(webView);
		return;
	};

  });
