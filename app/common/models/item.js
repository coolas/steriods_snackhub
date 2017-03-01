var module;

module = angular.module('ItemModel', ['restangular']);


module.factory('ItemRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    return RestangularConfigurer.setBaseUrl(BASE_URL);
  });
});