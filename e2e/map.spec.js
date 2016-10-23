const MapPage = require( "./map.po.js" )

describe("map page", () => {

    beforeEach( () => {
        MapPage.goto()
    })

    it("should have title Map", () => {
        expect( MapPage.title() ).toBe("Map")
    })

    it("should have an ngMap instance", () => {
        expect( MapPage.map().isPresent() ).toBe(true)
    })

    it("should render a marker for each location", () => {
        expect( MapPage.allMarkers().count() ).toBe(9)
    })

    it("should display two buttons", () => {
        expect( MapPage.allFilterButtons().count() ).toBe(2)
    })

    it("clicking a filter button produces a set of sub-filter buttons", () => {
        MapPage.allFilterButtons().first().click()
        expect( MapPage.allSubFilterButtons().count() ).toBe(6)
    })

    it("reduces number of visible locations after clicking a sub-filter button", () => {
        MapPage.allFilterButtons().first().click()
        MapPage.allSubFilterButtons().first().click()
        expect( MapPage.allMarkers().count() ).not.toBe(9)
    })

    it("all group options display after clicking reset", () => {
        MapPage.allFilterButtons().first().click()
        MapPage.allSubFilterButtons().first().click()
        expect( MapPage.allMarkers().count() ).not.toBe(9)
        MapPage.reset().click()
        expect( MapPage.allMarkers().count() ).toBe(9)
    })

})
