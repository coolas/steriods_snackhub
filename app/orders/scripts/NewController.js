angular
  .module('orders')
  .controller('NewController', function(
  		$scope,
      $http,
  		$localStorage,
  		supersonic,
  		OrderService,
      OrderItemService, 
  		MallService){

    $scope.order = {
      user_id: $localStorage.user.data["id"]
    };

    $scope.payment = {};

    $scope.showPayment = false;
    $scope.showCinema = false;

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

    $scope.proceedToCheckout = function() {
      $scope.showCheckout = true;
      $scope.showCinema = false;
      $scope.showPayment = false;
    }

    $scope.proceedToCinema = function() {
      $scope.showCheckout = false;
      $scope.showCinema = true;
      $scope.showPayment = false;

      alert(JSON.stringify($localStorage.user.items));
    }

    $scope.proceedToPayment = function() {
      $scope.showCheckout = false;
      $scope.showCinema = false;
      $scope.showPayment = true;

      $http({
        method: 'POST',
        url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
        headers: {
         "Accept": "application/json",
         "Accept-Language": "en_US",
         "Content-Type": "application/x-www-form-urlencoded",
         "Authorization": "Basic "+btoa("AfGTZFTkWCprJNIzvk0bWCoxicJadg8LkjEqfWDctYTND8uChwWWdpVTzJEkSfu0t9D_4LsYjMN-gBmv:ELeVJR25bvG8fPtrOnraMXF4ov2XvELDrE93OvObcUdhLlVpZDNfqrr84rRc1O-LdxWKoV1DfgTSWMkK")
        },
        data: "grant_type=client_credentials",
      }).success(function (result) {
        console.log(JSON.stringify(result));
        $localStorage.user.paypalAccessToken = result.access_token;
      });

    }

    $scope.makePayment = function() {
      $http({
        method: 'POST',
        url: 'https://api.sandbox.paypal.com/v1/payments/payment',
        headers: {
         "Accept": "application/json",
         "Accept-Language": "en_US",
         "Content-Type": "application/json",
         "Authorization": "Bearer "+$localStorage.user.paypalAccessToken 
        },
        data: {
          "intent": "sale",
          "payer": {
            "payment_method": "credit_card",
            "funding_instruments": [
            {
              "credit_card":
              {
                "number": $scope.payment.credit_card_number,
                "type": $scope.payment.credit_card_type,
                "expire_month": $scope.payment.expiry_month,
                "expire_year": $scope.payment.expiry_year,
                "cvv2": $scope.payment.cvv,
                "first_name": $scope.payment.first_name,
                "last_name": $scope.payment.last_name
              }

            }]
          },
          "transactions": [
          {
            "amount":
            {
              "total": $scope.orderTotal,
              "currency": "USD"
            },
            "description": "This is the payment transaction description."

          }]
        },
        // data: {
        //   "intent": "sale",
        //   "payer": {
        //     "payment_method": "credit_card",
        //     "funding_instruments": [
        //     {
        //       "credit_card":
        //       {
        //         "number": "4032036361355199",
        //         "type": "visa",
        //         "expire_month": 04,
        //         "expire_year": 2022,
        //         "cvv2": 111,
        //         "first_name": "Betsy",
        //         "last_name": "Buyer"
        //       }
        //     }]
        //   },
        //   "transactions": [
        //   {
        //     "amount":
        //     {
        //       "total": "7.47",
        //       "currency": "USD"
        //     },
        //     "description": "This is the payment transaction description."
        //   }]
        //},
      }).success(function (result) {
        console.log(JSON.stringify(result));

        $scope.order.total = $scope.orderTotal;

        OrderService.createOrder($scope.order).then((function(resp){
        //OrderRestangular.one('api/orders').customPOST(order).then((function(resp){
          //var order_id = 1

          for(var item in $localStorage.user.items){
            alert(JSON.stringify(item));
            var order_item_entry = {
              order_id: resp.id,
              item_id: item.id,
              quantity: item.quantity,
              subtotal: item.subtotal,
              name: item.name
            }
            OrderItemService.createOrderItem(order_item_entry).then((function(resp){

            }), function(resp){
              // error
            });
          }

          $localStorage.user.items = [];
          var webView = new steroids.views.WebView("app/orders/show.html?id=" + resp.id);
          steroids.layers.push({view: webView, navigationBar: false});

        }), function(resp){
          // error
        });

        // create order and show invoice
        //steroids.layers.popAll();
        //var webView = new steroids.views.WebView("app/orders/show.html?id=" + order_id);
        //steroids.layers.push({view: webView, navigationBar: false});

      });
    };

    $scope.goBack = function() {
      steroids.layers.pop();
      return;
    };

  	
  });
