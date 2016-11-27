import React from 'react'
import renderer from 'react-test-renderer'
import locService from '../locationsService/LocationsService'
import locations from '../data/MockLocations'
import FilterGroup from './FilterGroup'


describe("filter group component", () => {

    test('renders static content', () => {
      const props = {locations:locations, service:locService}
      const output = renderer.create(< FilterGroup {...props} />);
      expect( output.toJSON() ).toMatchSnapshot()
    })

})
