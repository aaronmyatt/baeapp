import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import locService from '../locationsService/LocationsService'
import locations from '../data/MockLocations'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const props = {activeLocations:locations, service:locService}
  ReactDOM.render(< List {...props} />, div);
})
