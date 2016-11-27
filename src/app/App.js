import React, { Component } from 'react'
import locService from '../locationsService/LocationsService'
import './App.css';
import locations from '../data/MockLocations'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locations:locations,
            activeLocations: locations
        }
        this.service = locService
        this.setActiveLocations = this.setActiveLocations.bind(this)
    }

    setActiveLocations(locations) {
        this.setState({activeLocations:locations})
    }

  render() {
    return (
      <div>
          <div className="App">
              <div className="App-header">
                  <h2>BAE React</h2>
              </div>
              <ul>
                  <li>
                      <a href="/#/">Home</a>
                  </li>
                  <li>
                      <a href="/#/map">Map</a>
                  </li>
                  <li>
                      <a href="/#/list">List</a>
                  </li>
              </ul>
              {this.props.children && React.cloneElement(this.props.children, {
                  locations:this.state.locations,
                  service:this.service,
                  activeLocations:this.state.activeLocations,
                  setActiveLocations:this.setActiveLocations
              })}
          </div>
      </div>
    );
  }
}

export default App;
