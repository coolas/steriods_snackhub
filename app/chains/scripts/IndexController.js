angular
  .module('chains')
  .controller('IndexController', function($scope, supersonic, ChainService) { 
  		var mall_id = 30;//steroids.view.params["id"];

  		ChainService.fetchChains(mall_id).then((function(resp){
  			return $scope.chains = resp;
  		}), function(resp){
  			return console.log("error", resp);
  		});

	$scope.showMenu = function(id) {
		var webView = new steroids.views.WebView("app/menus/show.html?id=" + id);
		steroids.layers.push(webView);
		return;
	};

  });
