import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';
import locService from '../locationsService/LocationsService'
import locations from '../data/MockLocations'


it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {locations:locations, service:locService}
    ReactDOM.render(< Map {...props} />, div);
});
