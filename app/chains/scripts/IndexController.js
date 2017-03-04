angular
  .module('chains')
  .controller('IndexController', function($scope, $localStorage, supersonic, ChainService) {
  		var mall_id = steroids.view.params["id"];

  		ChainService.fetchChains(mall_id).then((function(resp){
  			return $scope.chains = resp;
  		}), function(resp){
  			return console.log("error", resp);
  		});

    	$scope.showMenu = function(id) {
        if($localStorage.chain_id){
          $localStorage.user.items = [];
        }
        
        $localStorage.chain_id = id;
    		var webView = new steroids.views.WebView("app/menus/show.html?id=" + id);
        steroids.layers.push({view: webView, navigationBar: false});
    		return;
    	};

      $scope.goBack = function() {
        steroids.layers.pop();
        return;
      }

  });