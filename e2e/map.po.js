const MapPage = {
    goto: () => { return browser.get( "http://127.0.0.1:8000/#/map" ) },
    title: () => { return  element( by.tagName("h1") ).getText() }
}

module.exports = MapPage