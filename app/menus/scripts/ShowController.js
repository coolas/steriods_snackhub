angular
  .module('menus')
  .controller('ShowController', function($scope, supersonic) {
  	 var chainId = steroids.view.params["id"];
  	 
  	 // Fetch menu given the id and return menu items (API)
  	 $scope.menu = [];
  	 $scope.menuItems = [
  	 	{
		"id": 1,
		"name": "Burger Mcdo",
		"created_at": "2017-02-05T09:37:43.000Z",
		"updated_at": "2017-02-05T09:37:43.000Z",
		},
		{
		"id": 2,
		"name": "Big Mac",
		"created_at": "2017-02-05T09:48:01.000Z",
		"updated_at": "2017-02-05T09:48:01.000Z",
		},
		{
		"id": 3,
		"name": "Cheeseburger",
		"created_at": "2017-02-05T09:52:34.000Z",
		"updated_at": "2017-02-05T09:52:34.000Z",
		}
  	 ];

  	 $scope.showMenuItem = function(id) {
		var webView = new steroids.views.WebView("app/menu_items/show.html?id=" + id);
		steroids.layers.push(webView);
		return;
	};

  });
