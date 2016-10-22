const HomePage = require( "./home.po.js" )

describe("home page", () => {

    beforeEach( () => {
        HomePage.goto()
    })

    it("should have title BAE", () => {
        expect( HomePage.title() ).toBe("BAE")
    })

})
