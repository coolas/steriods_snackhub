var module;

module = angular.module("OrderMethods", ['OrderModel']);


module.factory("OrderService", function(OrderRestangular){
	return {
		fetchOrder: function(id){
			return OrderRestangular.one("api/orders/" + id).customGET();
		},
		fetchOrders: function(){
			return OrderRestangular.one("api/orders").customGET();
		},
		createOrder: function(order){
			return OrderRestangular.one('api/orders').customPOST(order);
		}

	}
});