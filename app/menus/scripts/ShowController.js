angular
  .module('menus')
  .controller('ShowController', function($scope, $localStorage, supersonic, ChainService, MenuService, ItemService) {
    steroids.view.navigationBar.hide();

    var chain_id = steroids.view.params["id"];

    if($localStorage.user.items){
      $scope.bagCount = $localStorage.user.items.length;
    }
    else{
      $scope.bagCount = 0;
    }

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
      steroids.layers.push({view: webView, navigationBar: false});
		  return;
    };

    $scope.checkout = function() {
      var webView = new steroids.views.WebView("app/orders/new.html");
      steroids.layers.push({view: webView, navigationBar: false});
      return;
    };

    $scope.showAccount = function() {
      var webView = new steroids.views.WebView("app/account/account.html");
      steroids.layers.push({view: webView, navigationBar: false});
      return;
    };

    $scope.goBack = function() {
      steroids.layers.pop();
      return;
    };

  });
