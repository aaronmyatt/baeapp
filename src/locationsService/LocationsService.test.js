import locationService from './LocationsService'
import locations from '../data/MockLocations'

describe("groupLocations", () => {

    describe("getGroups", () => {

        test("with no args, returns an empty container", () => {
            expect( locationService.getGroups().length ).toBe(0)
        })

        test("with empty array, returns an empty container", () => {
            expect( locationService.getGroups().length ).toBe(0)
        })

        test("returns a list of object keys", () => {
            expect( locationService.getGroups(locations) ).toEqual(Object.keys(locations[0]))
        })

        test("returns a list of keys that dont match filter", () => {
            expect( locationService.getGroups(locations, ["id", "address", "lng", "lat", "postalCode"]) ).toEqual(["city", "country"])
        })

    })

    describe("getUniqueGroupValues", () => {

        it("returns an an empty array if no args are passed", () => {
            expect( locationService.getUniqueGroupValues().length ).toBe(0)
        })

        it("returns a list of unique values from subgroup", () => {
            expect( locationService.getUniqueGroupValues(locations, "city").length ).toBe(6)
        })

    })

    describe("filterByGroup", () => {

        it("returns an an empty array if no args are passed", () => {
            expect( locationService.filterByGroup().length ).toBe(0)
        })

        it("returns the input array if not include arguments are given", () => {
            expect( locationService.filterByGroup(locations) ).toEqual(locations)
        })

        it("a subset of the input array objects based on include criteria", () => {
            expect( locationService.filterByGroup(locations, ["city", "Hanoi"] ) ).toEqual([locations[7], locations[8]])
        })

        it("returns the input array if include criteria are not found", () => {
            expect( locationService.filterByGroup(locations, ["city", "Nuuk"] ) ).toEqual(locations)
        })

    })
})
