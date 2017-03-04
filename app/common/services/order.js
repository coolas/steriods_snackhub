var module;

module = angular.module("OrderMethods", ['OrderModel']);


module.factory("OrderService", function(OrderRestangular){
	return {
		fetchOrders: function(){
			return OrderRestangular.one("api/orders").customGET();
		}

	}
});