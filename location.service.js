angular
    .module('location.service', [])
    .service("locationApi", locationApi)

    locationApi.$inject = ["$http"]
    function locationApi ($http) {

        const service = {}
        service.getAll = getAll

        return service

        function getAll () {
            const url = 'locations.json'
            const promise = $http.get(url)
            return promise
                .then(
                    (response) => {
                        return response.data
                    }
                )
        }
    }
