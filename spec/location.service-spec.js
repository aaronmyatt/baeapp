describe("locationsApi", () => {

    beforeEach(module("location.service"))
    beforeEach(() => {
      module(($provide) => {})
      inject(($injector) => {
        service = $injector.get("locationApi")
        httpBackend = $injector.get("$httpBackend")
      });
    });

    const response = {"address":"Wisma Academy\n4A, Jalan 19/1","city":"Petaling Jaya","country":"Malaysia","postalCode":"46300", "lng":101.6278914, "lat":3.1120654}

    it("request 1 item from json server", () => {
        httpBackend.expectGET("http://localhost:3000/locations/1")
            .respond(() => { return [] })
        service.get(1)
        httpBackend.flush()
    })

    it("request 1 item from json server", () => {
        httpBackend.expectGET("http://localhost:3000/locations")
            .respond(() => { return [] })
        service.getAll()
        httpBackend.flush()
    })
})
