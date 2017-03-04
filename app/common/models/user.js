var module;

module = angular.module('UserModel', ['restangular']);


module.factory('UserRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    return RestangularConfigurer.setBaseUrl(BASE_URL);
  });
});