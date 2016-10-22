(() => {
    'use strict';

    angular
        .module("map.module", [
            "ngRoute",
            "location.service"
        ])
        .controller("mapController", mapController)

    mapController.$inject = ["locationApi"]
    function mapController (locationApi) {
        const vm = this
        vm.title = "Map"
        vm.locations = locationApi

        vm.getAllLocations = getAllLocations

        function getAllLocations() {
            return vm.locations.getAll()
        }
    }

})()
