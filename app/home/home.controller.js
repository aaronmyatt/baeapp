(() => {
    'use strict';
    
    angular
        .module("home.module", [
            "ngRoute"
        ])
        .controller("homeController", homeController)

    homeController.$inject = [];
    function homeController () {
        const vm = this;
        vm.title = "BAE"
    }

})();
