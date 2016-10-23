const IndexPage = require( "./index.po.js" )

describe("base template", () => {

    beforeEach( () => {
        IndexPage.goto()
    })

    describe('navbar', () => {

        it("should load a material navbar", () => {
            expect(IndexPage.nav.menuBar().isPresent()).toBe(true)
        })

        it("should have three buttons", () => {
            expect(IndexPage.nav.buttons().count()).toEqual(3)
        })

        it("each nav button leads to their respective page", () => {
            IndexPage.nav.walkPages()
        })

    })

})
