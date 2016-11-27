import React, { Component } from 'react'

class FilterGroup extends Component {
    constructor(props){
        super(props)
        this.state = {activeGroup:[]}

        this.locations = this.props.locations
        this.activeGroup = this.props.activeGroup
        this.service = this.props.service

        this.groupButtonClickHandler = this.groupButtonClickHandler.bind(this)
        this.uniqueGroupValueButtonClickHandler = this.uniqueGroupValueButtonClickHandler.bind(this)
    }

    groupButtonClickHandler(e) {
      this.setState({activeGroup:[e.target.innerText]})
    }

    uniqueGroupValueButtonClickHandler(e) {
        this.setState({activeGroup:[this.state.activeGroup[0], e.target.innerText]})
        let activeLocations = this.service.filterByGroup(this.locations, this.state.activeGroup)
        this.props.setActiveLocations(activeLocations)
    }

    renderUniqueGroupValues() {
        let groups = this.service.getUniqueGroupValues(this.locations, this.state.activeGroup[0])
          return groups.map((n, index)=>{
              return < FilterButton key={index} name={n} handler={this.uniqueGroupValueButtonClickHandler}/>
          })
    }

    renderGroupButtons() {
        let groups = this.service.getGroups(
            this.locations,
            ["id", "address", "lng", "lat", "postalCode"])
        return groups.map((n, index)=>{
            return < FilterButton key={n} name={n} handler={this.groupButtonClickHandler} />
        })
    }

    render() {
      return (
          <div>
              <div>
                  <ul>{this.renderGroupButtons()}</ul>
              </div>
              <div>
                  <ul>{this.renderUniqueGroupValues()}</ul>
              </div>
          </div>
      );
    }
}

class FilterButton extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.handler = this.props.handler.bind(this)
    }

  render() {
      let name = this.props.name
    return (
        <li>
            <button onClick={this.handler} >{name}</button>
        </li>
    );
  }
}

export default FilterGroup
