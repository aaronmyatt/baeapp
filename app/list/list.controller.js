(() => {
    'use strict';

    angular
        .module("list.module", [
            "ngRoute",
            "location.service"
        ])
        .controller("listController", listController)

    listController.$inject = ["locationApi"]
    function listController (locationApi) {
        const vm = this
        vm.title = "List"
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
