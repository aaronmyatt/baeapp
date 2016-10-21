(() => {

    angular
        .module("list.module", ["location.service"])
        .controller("listController", listController)

    listController.$inject = ["locationApi"]
    function listController (locationApi) {
        const vm = this
        vm.title = "List"
        vm.locations = locationApi

        vm.getAllLocations = getAllLocations

        function getAllLocations() {
            return vm.locations.getAll()
        }
    }

})()
