angular
  .module('orders')
  .controller('NewController', function(
  		$scope,
  		$localStorage,
  		supersonic,
  		OrderService, 
  		MallService){


    if($localStorage.user.items.length > 0){
      $scope.showCheckout = true;
      $scope.orderItems = $localStorage.user.items;

      $scope.sum = function(items, prop){
          return items.reduce( function(a, b){
              return a + b[prop];
          }, 0);
      };

      $scope.orderTotal = $scope.sum($localStorage.user.items, 'subtotal');
    }
    else{
      $scope.showCheckout = false;
    }

  	MallService.fetchMalls().then((function(resp){
		  return $scope.malls = resp;
	  }), function(resp){
		  return console.log("error", resp);
	  });

  	$scope.showChains = function(id) {
  		$localStorage.user.mall_id = id;
  		var webView = new steroids.views.WebView("app/chains/index.html?id=" + id);
      steroids.layers.push({view: webView, navigationBar: false});
  		return;
  	};

    $scope.goBack = function() {
      steroids.layers.pop();
      return;
    };

  	
  });
