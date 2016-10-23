const ListPage = require( "./list.po.js" )

describe("list page", () => {

    beforeEach( () => {
        ListPage.goto()
    })

    it("should have title list", () => {
        expect( ListPage.title() ).toBe("List")
    })

    it("locations should appear on page load", () => {
        expect( ListPage.locationList().count() ).toBe(9)
    })

    it("two buttons render on page", () => {
        expect( ListPage.allFilterButtons().count() ).toBe(2)
    })

    it("clicking a filter button produces a set of sub-filter buttons", () => {
        ListPage.allFilterButtons().first().click()
        expect( ListPage.allSubFilterButtons().count() ).toBe(6)
    })

    it("clicking a sub-filter button reduces number of visible locations", () => {
        ListPage.allFilterButtons().first().click()
        ListPage.allSubFilterButtons().first().click()
        expect( ListPage.locationList().count() ).not.toBe(9)
    })

    it("all group options display after clicking reset", () => {
        ListPage.allFilterButtons().first().click()
        ListPage.allSubFilterButtons().first().click()
        expect( ListPage.locationList().count() ).not.toBe(9)
        ListPage.reset().click()
        expect( ListPage.locationList().count() ).toBe(9)
    })

})
