const IndexPage = {
    goto: () => { return browser.get( "http://127.0.0.1:3001" ) },
    nav : {
        menuBar: () => { return element( by.tagName("md-nav-bar") )},
        buttons: () => { return element.all( by.className("nav-button") ) },
        homeButton: () => { return element( by.css(".nav-button[md-nav-href=\"#/\"]") ) },
        mapButton: () => { return element( by.css(".nav-button[md-nav-href=\"#/map\"]") ) },
        listButton: () => { return element( by.css(".nav-button[md-nav-href=\"#/list\"]") ) },
        walkPages: walkPages
    }
}

function walkPages() {
    IndexPage.nav.mapButton().click()
    expect(browser.getLocationAbsUrl()).toEqual("/map")
    IndexPage.nav.listButton().click()
    expect(browser.getLocationAbsUrl()).toEqual("/list")
    IndexPage.nav.homeButton().click()
    expect(browser.getLocationAbsUrl()).toEqual("/")
}

module.exports = IndexPage
