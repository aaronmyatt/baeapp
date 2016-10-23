const ListPage = {
    goto: () => { return browser.get( "http://127.0.0.1:3001/#/list" ) },
    title: () => { return element( by.tagName("h1") ).getText() },
    locationList: () => { return element.all( by.repeater('location in vm.filteredLocations' )) },
    allFilterButtons: () => { return element.all( by.className('filter-button' )) },
    allSubFilterButtons: () => { return element.all( by.className('sub-filter-button' )) }
}

module.exports = ListPage
