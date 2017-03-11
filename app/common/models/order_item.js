var module;

module = angular.module('OrderItemModel', ['restangular']);

module.factory('OrderItemRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    return RestangularConfigurer.setBaseUrl(BASE_URL);
  });
});