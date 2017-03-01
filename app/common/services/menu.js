var module;

module = angular.module("MenuMethods", ['MenuModel']);

module.factory("MenuService", function(MenuRestangular){
	return {
		fetchMenus: function(chain_id){
			return MenuRestangular.one("api/menus?chain_id=" + chain_id).customGET();
		}

	}
});