angular
    .module("groupLocations.service", [])
    .service("groupLocations", groupLocations)

    groupLocations.$inject = []
    function groupLocations () {

        const service = {}
        service.getGroups = getGroups
        service.filterByGroup = filterByGroup

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

        function filterByGroup(locations = [], include = []) {
            const result = locations.filter((location) => {
                return location[include[0]] === include[1]
            })
            if(result.length > 0){
                return result
            }else{
                return locations
            }
        }
    }
