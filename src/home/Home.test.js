import React from 'react'
import renderer from 'react-test-renderer'
import Home from './Home'


describe("home page", () => {

    test('renders static content', () => {
      const output = renderer.create(< Home />);
      expect( output.toJSON() ).toMatchSnapshot()
    })

})
