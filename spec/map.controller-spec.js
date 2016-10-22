describe("location list controller",  () => {
    const locationArray = [{"address":"Wisma Academy\n4A, Jalan 19/1","city":"Petaling Jaya","country":"Malaysia","postalCode":"46300", "lng":101.6278914, "lat":3.1120654}]

    beforeEach(module("map.module"))

    beforeEach(() => {
      module(($provide) => {})

      inject(($controller, $injector) => {
          service = $injector.get('locationApi')
          spyOn(service, "getAll").and.returnValue( Promise.resolve(locationArray) );
          controller = $controller('mapController')
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

    it("getAllLocations resolves to a list of locations", (done) => {
        controller.getAllLocations()
        done()
        expect(controller.retrievedLocations).toBe(locationArray)
    })

    it("getAllLocations called on init", (done) => {
        done()
        expect(controller.retrievedLocations).toBe(locationArray)
    })
});
