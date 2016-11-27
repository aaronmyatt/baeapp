import React, { Component } from 'react'
import './List.css'

import FilterGroup from '../filterGroup/FilterGroup'

class List extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <div>
            <h2>LIST</h2>
            <FilterGroup {...this.props} />
            < LocationList locations={this.props.activeLocations}/>
        </div>
    )
  }
}

class LocationList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    renderListItems(){

        return this.props.locations.map(loc => {
            return < ListItem location={loc} key={loc.id} />
        })
    }

  render() {
    return (
        <div>
            {this.renderListItems()}
        </div>
    )
  }
}

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.location = this.props.location
    }

  render() {
    return (
        <div>
            <ul>
                <li>{this.location.id}</li>
                <li>{this.location.address}</li>
                <li>{this.location.city}</li>
                <li>{this.location.country}</li>
            </ul>
        </div>
    )
  }
}

export default List
