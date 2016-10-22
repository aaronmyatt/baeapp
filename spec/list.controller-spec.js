describe("list controller",  () => {
    const locationArray = [{"address":"Wisma Academy\n4A, Jalan 19/1","city":"Petaling Jaya","country":"Malaysia","postalCode":"46300", "lng":101.6278914, "lat":3.1120654}]

    beforeEach(module("list.module"))
    beforeEach(module("location.service"))

    beforeEach(() => {
      module(($provide) => {})

      inject(($controller, $injector) => {
        service = $injector.get('locationApi')
        spyOn(service, "getAll").and.returnValue(locationArray);
        controller = $controller('listController')
      })

    })

    it ("instantiates successfully", () => {
        expect(controller.title).toBe("List")
    })

    it ("depends on location.map", () => {
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

    it("getAllLocations called on init", function () {
        expect(controller.retrievedLocations).toBe(locationArray)
    });
});
