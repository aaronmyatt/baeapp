angular
    .module("groupLocations.service", [])
    .service("groupLocations", groupLocations)

    groupLocations.$inject = []
    function groupLocations () {

        const service = {}
        service.getGroups = getGroups

        return service

        function getGroups (locations = [], exclude = []) {
            if( locations.length > 0 ) {
                const keys = Object.keys(locations[0])
                return keys.filter((key) => {
                    return exclude.indexOf(key) === -1
                })
            }
            return locations
        }
    }
