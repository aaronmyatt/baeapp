const MapPage = require( "./map.po.js" )

describe("map page", () => {

    beforeEach( () => {
        MapPage.goto()
    })

    it("should have title Map", () => {
        expect( MapPage.title() ).toBe("Map")
    })

})
