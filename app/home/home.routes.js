(() => {
    'use strict';

  angular
    .module('home.module')
    .config(configFunction)

  configFunction.$inject = ['$routeProvider'];
  function configFunction($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/home/home.html',
      controller: 'homeController',
      controllerAs: 'vm'
    });
  }

})()
