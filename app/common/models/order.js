var module;

module = angular.module('OrderModel', ['restangular']);

module.factory('OrderRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    return RestangularConfigurer.setBaseUrl(BASE_URL);
  });
});