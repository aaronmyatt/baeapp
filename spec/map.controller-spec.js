describe("location list controller",  () => {
    const locationArray = [{"address":"Wisma Academy\n4A, Jalan 19/1","city":"Petaling Jaya","country":"Malaysia","postalCode":"46300", "lng":101.6278914, "lat":3.1120654}]

    beforeEach(module("map.module"))
    beforeEach(module("location.service"))

    beforeEach(() => {
      module(($provide) => {})

      inject(($controller, $injector) => {
          service = $injector.get('locationApi')
          spyOn(service, "getAll").and.returnValue( Promise.resolve(locationArray) );

          groupService = $injector.get('groupLocations')
          spyOn(groupService, "getGroups")
          spyOn(groupService, "getUniqueGroupValues").and.callThrough();
          spyOn(groupService, "filterByGroup").and.returnValue(locationArray)

          controller = $controller('mapController')
          controller.retrievedLocations = locationArray
      })
    })

    it ("instantiates successfully", () => {
        expect(controller.title).toBe("Map")
    })

    it ("depends on location.service", () => {
        expect(controller.locations).toBeDefined()
    })

    it("calls locationApi.getAll", function () {
        controller.getAllLocations()
        expect(controller.locations.getAll).toHaveBeenCalled()
    });

    it("getAllLocations called on init", () => {
        expect(controller.retrievedLocations).toBe(locationArray)
    })

    describe("getAllLocations", () => {

        it("calls locationApi.getAll", () => {
            controller.getAllLocations()
            expect(controller.locations.getAll).toHaveBeenCalled()
        })

        it("getAllLocations resolves to a list of locations", () => {
            controller.getAllLocations()
            expect(controller.retrievedLocations).toBe(locationArray)
        })

        it("calls grouping service", (done) => {
            controller.getAllLocations()
            done()
            expect(controller.filteredLocations.length).toEqual(1)
        })

    })

    describe("getFilterGroups", () => {

        it("calls locationGroup.service.getGroups", () => {
            controller.locationGroups()
            expect(controller.groupLocations.getGroups).toHaveBeenCalled()
        })

    })

    describe("uniqueGroupValues", () => {

        it("calls locationGroup.service.getUniqueGroupValues", () => {
            controller.uniqueGroupValues()
            expect(controller.groupLocations.getUniqueGroupValues).toHaveBeenCalled()
        })

        it("sets activeGroup", () => {
            controller.uniqueGroupValues("city")
            expect(controller.activeGroup).toEqual("city")
        })

        it("sets vm.filterValues", () => {
            controller.uniqueGroupValues("city")
            expect(controller.filterValues.length).toEqual(1)
        })

    })

    describe("filterByGroup", () => {

        it("calls locationGroup.service.filterByGroup", () => {
            controller.filterGroup()
            expect(controller.groupLocations.filterByGroup).toHaveBeenCalled()
        })

        it("sets vm.filteredLocations", () => {
            controller.activeGroup = 'city'
            controller.filterGroup('Petaling Jaya')
            expect(controller.filteredLocations.length).toEqual(1)
        })

    })

    describe("reset-button", () => {

        it("returns activeGroup and filteredLocations to default state", () => {
            controller.activeGroup = 'city'
            controller.filteredLocations = []
            controller.reset()
            expect(controller.activeGroup).toEqual("")
            expect(controller.filteredLocations).toEqual(locationArray)
        })

    })

});
