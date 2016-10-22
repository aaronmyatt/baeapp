(() => {
    'use strict';

    angular
        .module("map.module", [
            "ngRoute",
            "ngMap",
            "location.service"
        ])
        .controller("mapController", mapController)

    mapController.$inject = ["locationApi"]
    function mapController (locationApi) {
        const vm = this
        vm.title = "Map"
        vm.locations = locationApi
        vm.retrievedLocations = []

        vm.getAllLocations = getAllLocations

        function getAllLocations() {
            const promise = vm.locations.getAll()
            promise.then((response) => {
                vm.retrievedLocations = response
                return response
            })
        }

        function init() {
            getAllLocations()
        }
        init()
    }

})()
