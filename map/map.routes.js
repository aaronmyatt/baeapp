(() => {
    'use strict';

  angular
    .module('map.module')
    .config(configFunction)

  configFunction.$inject = ['$routeProvider'];
  function configFunction($routeProvider) {
    $routeProvider.when('/map', {
      templateUrl: 'map/map.html',
      controller: 'mapController',
      controllerAs: 'vm'
    });
  }

})()
