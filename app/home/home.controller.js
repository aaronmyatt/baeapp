(() => {

    angular
        .module("home.module", [])
        .controller("homeController", homeController)

    homeController.$inject = [];
    function homeController () {
        const vm = this;
        vm.title = "BAE"
    }

})();
