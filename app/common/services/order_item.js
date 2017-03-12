var module;

module = angular.module("OrderItemMethods", ['OrderItemModel']);


module.factory("OrderItemService", function(OrderItemRestangular){
	return {
		fetchOrderItem: function(id){
			return OrderItemRestangular.one("api/order_items/" + id).customGET();
		},
		fetchOrderItems: function(order_id){
			return OrderItemRestangular.one("api/order_items?order_id="+order_id).customGET();
		},
		createOrderItem: function(order_item){
			return OrderItemRestangular.one('api/order_items').customPOST(order_item);
		}

	}
});