angular
    .module('location.service', [])
    .service("locationApi", locationApi)

    locationApi.$inject = ["$http"]
    function locationApi ($http) {

        const service = {}
        service.get = get
        service.getAll = getAll

        return service

        function get (arg) {
            const url = `http://localhost:3000/locations/${arg}`
            const promise = $http.get(url)
            return promise
                .then(
                    (response) => {
                        console.log(response)
                        return response
                    }
                )
                .catch(
                    (err) => { console.log(err) }
                )
        }

        function getAll () {
            const url = 'http://localhost:3000/locations'
            const promise = $http.get(url)
            return promise.then(
                (response) => { return response.json }
            )
        }
    }
