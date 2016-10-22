const ListPage = require( "./list.po.js" )

describe("list page", () => {

    beforeEach( () => {
        ListPage.goto()
    })

    it("should have title list", () => {
        expect( ListPage.title() ).toBe("List")
    })

})
