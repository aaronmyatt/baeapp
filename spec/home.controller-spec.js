describe('home controller',  () => {
    beforeEach(module('home.module'))

    beforeEach(function() {
      module(function($provide) {
      })
      inject(function($controller, $injector) {
        controller = $controller('homeController')
      })
    })

    it ('instantiates successfully', () => {
        expect(controller.title).toBe("BAE")
    })

});
