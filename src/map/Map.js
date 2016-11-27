import _ from "lodash";
import React, { Component } from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

import './Map.css'

import FilterGroup from '../filterGroup/FilterGroup'

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

  render() {
    return (
        <div>
            <h2>Map</h2>
            <FilterGroup {...this.props} />
            < MapViewPort locations={this.props.activeLocations}/>
        </div>
    )
  }
}



class MapViewPort extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onMapCreated(map) {
	map.setOptions({
	    disableDefaultUI: true
	})
    }
    
    onDragEnd(e) {
	console.log('onDragEnd', e);
    }

    onCloseClick() {
	console.log('onCloseClick');
    }
    
  onClick(e) {
      console.log('onClick', e);
  }


  render() {
    return (
            <div style={{height: `300px` }}>
<Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'YOUR_API_KEY'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
            </div>
    )
  }
}

export default Map
