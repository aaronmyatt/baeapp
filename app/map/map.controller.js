(() => {
    'use strict';

    angular
        .module("map.module", [
            "ngRoute",
            "ngMap",
            "location.service",
            "groupLocations.service"
        ])
        .controller("mapController", mapController)

    mapController.$inject = ["locationApi", "groupLocations"]
    function mapController (locationApi, groupLocations) {
        const vm = this
        vm.title = "Map"
        vm.locations      = locationApi
        vm.groupLocations = groupLocations

        vm.retrievedLocations = []
        vm.filteredLocations  = []
        vm.filterValues       = []
        vm.activeGroup        = ""

        vm.getAllLocations   = getAllLocations
        vm.locationGroups    = locationGroups
        vm.uniqueGroupValues = uniqueGroupValues
        vm.filterGroup       = filterGroup

        function getAllLocations() {
            const promise = vm.locations.getAll()
            promise.then((response) => {
                vm.retrievedLocations = response
                vm.filterGroup()
                return response
            })
        }

        function locationGroups () {
            return groupLocations.getGroups(vm.retrievedLocations, ["id", "address", "lng", "lat", "postalCode", "$$hashKey"])
        }

        function uniqueGroupValues(choice) {
            vm.activeGroup  = choice
            vm.filterValues = groupLocations.getUniqueGroupValues(vm.retrievedLocations, choice)
        }

        function filterGroup (choice) {
            vm.filteredLocations = groupLocations.filterByGroup(vm.retrievedLocations, [vm.activeGroup, choice])
        }

        function init() {
            getAllLocations()
        }
        init()
    }

})()
