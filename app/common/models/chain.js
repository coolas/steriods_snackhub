var module;

module = angular.module('ChainModel', ['restangular']);


module.factory('ChainRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    return RestangularConfigurer.setBaseUrl(BASE_URL);
  });
});