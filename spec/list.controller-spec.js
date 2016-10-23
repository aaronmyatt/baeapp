describe("list controller",  () => {
    const locationArray = [{"address":"Wisma Academy\n4A, Jalan 19/1","city":"Petaling Jaya","country":"Malaysia","postalCode":"46300", "lng":101.6278914, "lat":3.1120654}]

    beforeEach(module("list.module"))
    beforeEach(module("location.service"))

    beforeEach(() => {
      module(($provide) => {})

      inject(($controller, $injector) => {
        locationService = $injector.get('locationApi')
        spyOn(locationService, "getAll").and.returnValue( Promise.resolve(locationArray) )

        groupService = $injector.get('groupLocations')
        spyOn(groupService, "getGroups")
        spyOn(groupService, "filterByGroup")

        controller = $controller('listController')
      })

    })

    it ("instantiates successfully", () => {
        expect(controller.title).toBe("List")
    })


    it("depends on locationGroup.service", () => {
        expect(controller.groupLocations).toBeDefined()
    })

    it ("depends on location.service", () => {
        expect(controller.locations).toBeDefined()
    })

    describe("getAllLocations", () => {

        it("calls locationApi.getAll", () => {
            controller.getAllLocations()
            expect(controller.locations.getAll).toHaveBeenCalled()
        })

    })

    describe("getFilterGroups", () => {

        it("calls locationGroup.service.getGroups", () => {
            controller.locationGroups()
            expect(controller.groupLocations.getGroups).toHaveBeenCalled()
        })

    })

    describe("filterByGroup", () => {

        it("calls locationGroup.service.filterByGroup", () => {
            controller.filterGroup()
            expect(controller.groupLocations.filterByGroup).toHaveBeenCalled()
        })

    })
})
