const ListPage = {
    goto: () => { return browser.get( "http://127.0.0.1:8000/#/list" ) },
    title: () => { return element( by.tagName("h1") ).getText() }
}

module.exports = ListPage
