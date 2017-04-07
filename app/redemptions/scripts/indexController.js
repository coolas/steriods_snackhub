angular
  .module('redemptions')
  .controller('IndexController', function($scope, supersonic, RedemptionService) {
  		RedemptionService.fetchMalls().then((function(resp){
  			return $scope.Redemptions = resp;
  		}), function(resp){
  			return console.log("error", resp);
  		});

    	$scope.showChains = function(id) {
        $localStorage.user.mall_id = id;
    		var webView = new steroids.views.WebView("app/chains/index.html?id=" + id);
    		steroids.layers.push(webView);
    		return;
    	};

  });
