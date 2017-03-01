var module;

module = angular.module("ItemMethods", ['ItemModel']);

module.factory("ItemService", function(ItemRestangular){
	return{
		fetchItem: function(id){
			return ItemRestangular.one("api/items/" + id).customGET();
		},
	 	fetchItems: function(menu_id){
			return ItemRestangular.one("api/items?menu_id=" + menu_id).customGET();
		}

	}
});