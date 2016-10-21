(() => {

    angular
        .module("list.module", ["location.service"])
        .controller("listController", homeController)

    homeController.$inject = ["locationApi"]
    function homeController (locationApi) {
        const vm = this
        vm.title = "All Locations"
        vm.locations = locationApi

        vm.getAllLocations = getAllLocations

        function getAllLocations() {
            return vm.locations.getAll()
        }
    }

})()
