var module;

module = angular.module('MallModel', ['restangular']);


module.factory('MallRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    return RestangularConfigurer.setBaseUrl(BASE_URL);
  });
});