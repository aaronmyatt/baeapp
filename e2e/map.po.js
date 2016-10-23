const MapPage = {
    goto               : () => { return browser.get( "http://127.0.0.1:3001/#/map" ) },
    title              : () => { return element( by.tagName("h1") ).getText() },
    map                : () => { return element( by.tagName("ng-map") ) },
    allMarkers         : () => { return element.all( by.tagName("marker") ) },
    allFilterButtons   : () => { return element.all( by.className('filter-button' )) },
    allSubFilterButtons: () => { return element.all( by.className('sub-filter-button' )) },
    reset              : () => { return element( by.id("reset-button") ) }
}

module.exports = MapPage
