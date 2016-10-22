(() => {
    'use strict';

  angular
    .module('list.module')
    .config(configFunction)

  configFunction.$inject = ['$routeProvider'];
  function configFunction($routeProvider) {
    $routeProvider.when('/list', {
      templateUrl: 'app/list/list.html',
      controller: 'listController',
      controllerAs: 'vm'
    });
  }

})()
