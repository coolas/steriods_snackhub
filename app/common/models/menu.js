var module;

module = angular.module('MenuModel', ['restangular']);


module.factory('MenuRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    return RestangularConfigurer.setBaseUrl(BASE_URL);
  });
});