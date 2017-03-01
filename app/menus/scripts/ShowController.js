angular
  .module('menus')
  .controller('ShowController', function($scope, supersonic, ChainService, MenuService, ItemService) {
  	 var chain_id = steroids.view.params["id"];

  	 ChainService.fetchChain(chain_id).then((function(resp){
  			return $scope.chain = resp;
  		}), function(resp){
  			return console.log("error", resp);
  		});

  	 MenuService.fetchMenus(chain_id).then((function(resp){

  	 	ItemService.fetchItems(resp[0].id).then((function(resp){
		
			return $scope.items = resp;

		}), function(resp){
			return console.log("error", resp);
		});

  	 }), function(resp){
  	 	return console.log("error", resp);
  	 });

  	 
  	
  	 $scope.showItem = function(id) {
		var webView = new steroids.views.WebView("app/items/show.html?id=" + id);
		steroids.layers.push(webView);
		return;
	};

  });
