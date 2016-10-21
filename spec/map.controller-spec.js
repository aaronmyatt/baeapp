describe("location list controller",  () => {
    const locationArray = [{"address":"Wisma Academy\n4A, Jalan 19/1","city":"Petaling Jaya","country":"Malaysia","postalCode":"46300", "lng":101.6278914, "lat":3.1120654}]

    beforeEach(module("map.module"))

    beforeEach(() => {
      module(($provide) => {})

      inject(($controller, $injector) => {
        controller = $controller('mapController')
      })

      spyOn(controller.locations, "getAll").and.returnValue(locationArray);
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

    it("getAllLocations returns a list of locations", function () {
        const result = controller.getAllLocations()
        expect(result).toBe(locationArray)
    });
});
