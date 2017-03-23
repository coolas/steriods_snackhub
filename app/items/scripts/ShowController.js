angular
  .module('items')
  .controller('ShowController', function($scope, $localStorage, supersonic, ItemService) {
    steroids.view.navigationBar.hide();

  	var item_id = steroids.view.params["id"];

    $scope.bagCount = $localStorage.user.items.length;

  	// Fetch menuItem given the id (API)
  	ItemService.fetchItem(item_id).then((function(resp){
      $scope.item = resp;
      $scope.item.quantity = 1;
  		return $scope.item;
  	}), function(resp){
  		return console.log("error", resp);
  	});

  	$scope.addToBag = function(id, quantity, subtotal, name, menu_id) {

      console.log(id + " " + quantity + " " + subtotal + " " + name + " " + menu_id);
      $localStorage.user.items.push({id: id, quantity: quantity, subtotal: subtotal, name: name});
      $scope.bagCount = $localStorage.user.items.length;
      
  		var webView = new steroids.views.WebView("app/menus/show.html?id=" + menu_id);
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
