describe("groupLocations", () => {

    beforeEach(module("groupLocations.service"))

    beforeEach(() => {
      module(($provide) => {})

      inject(($injector) => {
        service = $injector.get("groupLocations")
      })
    })

    const locations = [
        {"id":1,"address":"Wisma Academy\n4A,Jalan 19/1","city":"Petaling Jaya","country":"Malaysia","postalCode":"46300", "lng":101.6278914, "lat":3.1120654},
        {"id":2,"address":"The Boulevard\nMid Valley City, Lingkaran Syed Putra","city":"Kuala Lumpur","country":"Malaysia","postalCode":"59200","lng":101.667495,"lat":3.100753},
        {"id":3,"address":"Vertical Business Suite II, \nAvenue 3, Bangsar South, \nNo.8, Jalan Kerinchi,","city":"Kuala Lumpur","country":"Malaysia","postalCode":"59200", "lng": 101.6634711, "lat": 3.1105239},
        {"id":4,"address":"Oval Damansara,\nNo.685, Jalan Damansara,\nSprint Highway,","city":"Kuala Lumpur","country":"Malaysia","postalCode":"60000", "lng": 101.6289193, "lat": 3.1320123},
        {"id":5,"address":"Jalan Pandan Cahaya 1/2\nPandan Cahaya\nSelangor Darul Ehsan","city":"Ampang","country":"Malaysia","postalCode":"68000", "lng": 101.7549664, "lat": 3.1384067},
        {"id":6,"address":"Aljunied Rd, \nCititech Industrial Building,","city":"Singapore","country":"Singapore","postalCode":"389838","lng":103.879393,"lat":1.325676},
        {"id":7,"address":"CTI Tower, 191/11-12 Ratchadaphisek Road\nKhwaeng Klongtoey, Khet Klongtoey,","city":"Bangkok","country":"Thailand","postalCode":"10110","lng":100.583109,"lat":13.708034},
        {"id":8,"address":"HITTC building, 185 Gang Vo, Dong Da, Hanoi","city":"Hanoi","country":"Viet Nam", "lng": 105.7810633, "lat": 21.0361061},
        {"id":9,"address":"Van Bao str., Ba Dinh dist.,","city":"Hanoi","country":"Viet Nam", "lng": 105.8148791, "lat": 21.0321657}
    ]

    describe("getGroups", () => {

        it("with no args, returns an empty container", () => {
            expect( service.getGroups().length ).toBe(0)
        })

        it("with empty array, returns an empty container", () => {
            expect( service.getGroups().length ).toBe(0)
        })

        it("returns a list of object keys", () => {
            expect( service.getGroups(locations) ).toEqual(Object.keys(locations[0]))
        })

        it("returns a list of keys that dont match filter", () => {
            expect( service.getGroups(locations, ["id", "address", "lng", "lat", "postalCode"]) ).toEqual(["city", "country"])
        })
    })

    describe("filterByGroup", () => {

        it("returns an an empty array if no args are passed", () => {
            expect( service.filterByGroup().length ).toBe(0)
        })

        it("returns the input array if not include arguments are given", () => {
            expect( service.filterByGroup(locations) ).toEqual(locations)
        })

        it("a subset of the input array objects based on include criteria", () => {
            expect( service.filterByGroup(locations, ["city", "Hanoi"] ) ).toEqual([locations[7], locations[8]])
        })

        it("returns the input array if include criteria are not found", () => {
            expect( service.filterByGroup(locations, ["city", "Nuuk"] ) ).toEqual(locations)
        })

    })
})
