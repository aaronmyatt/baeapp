(() => {
    'use strict';

  angular
    .module('map.module')
    .config(configFunction)

  configFunction.$inject = ['$routeProvider'];
  function configFunction($routeProvider) {
    $routeProvider.when('/map', {
      templateUrl: 'app/map/map.html',
      controller: 'mapController',
      controllerAs: 'vm'
    });
  }

})()
