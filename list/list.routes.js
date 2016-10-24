(() => {
    'use strict';

  angular
    .module('list.module')
    .config(configFunction)

  configFunction.$inject = ['$routeProvider'];
  function configFunction($routeProvider) {
    $routeProvider.when('/list', {
      templateUrl: 'list/list.html',
      controller: 'listController',
      controllerAs: 'vm'
    });
  }

})()
