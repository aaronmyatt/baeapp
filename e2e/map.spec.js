const MapPage = require( "./map.po.js" )

describe("map page", () => {

    beforeEach( () => {
        MapPage.goto()
    })

    it("should have title Map", () => {
        expect( MapPage.title() ).toBe("Map")
    })

    it("should have an ngMap instance", () => {
        expect( element( by.tagName("ngMap") ).isPresent() )
    })

    it("map should render a marker for each location", () => {
        expect( element.all( by.tagName("marker") ).count() ).toBe(9)
    })

})
