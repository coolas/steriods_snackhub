var module;

module = angular.module('RedemptionModel', ['restangular']);


module.factory('RedemptionRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    return RestangularConfigurer.setBaseUrl(BASE_URL);
  });
});