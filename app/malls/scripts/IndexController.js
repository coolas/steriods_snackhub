angular
  .module('malls')
  .controller('IndexController', function($scope, supersonic, MallService) {
  		MallService.fetchMalls().then((function(resp){
  			return $scope.malls = resp;
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
