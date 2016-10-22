const ListPage = require( "./list.po.js" )

describe("list page", () => {

    beforeEach( () => {
        ListPage.goto()
    })

    it("should have title list", () => {
        expect( ListPage.title() ).toBe("List")
    })

    it("locations should appear on page load", () => {
        expect( element.all( by.repeater('location in vm.retrievedLocations' )).count() ).toBe(9)
    })

})
