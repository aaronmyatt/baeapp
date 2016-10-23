(() => {
    'use strict';

    angular
        .module("list.module", [
            "ngRoute",
            "location.service",
            "groupLocations.service"
        ])
        .controller("listController", listController)

    listController.$inject = ["locationApi", "groupLocations"]
    function listController (locationApi, groupLocations) {
        const vm = this
        vm.title = "List"

        vm.locations      = locationApi
        vm.groupLocations = groupLocations

        vm.retrievedLocations = []

        vm.getAllLocations = getAllLocations
        vm.locationGroups  = locationGroups
        vm.filterGroup     = filterGroup

        function getAllLocations() {
            const promise = vm.locations.getAll()
            promise.then((response) => {
                vm.retrievedLocations = response
                return response
            })
        }

        function locationGroups () {
            return groupLocations.getGroups(vm.retrievedLocations, ["id", "address", "lng", "lat", "postalCode"])
        }

        function filterGroup (group, choice) {
            return groupLocations.filterByGroup(vm.retrievedLocations, [group, choice])
        }

        function init() {
            getAllLocations()
        }
        init()
    }

})()
