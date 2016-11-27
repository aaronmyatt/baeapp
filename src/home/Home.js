import React, { Component } from 'react'
import './Home.css'


class Home extends Component {
    constructor (props) {
        super(props)
        this.state = null
    }

  render() {
    return (

        <div>
            < HomeText />
        </div>
    );
  }
}

class HomeText extends Component {
  constructor (props) {
      super(props)
      this.state = null
  }

  render() {
    return (
        <div>
            <div>
                <h2>SPEC</h2>
                <p>Providing location info in JSON format (<a href="https://github.com/aaronmyatt/baeapp/blob/master/location.json">locations</a>). Let’s build a single page application:</p>
            </div>
            <ol>
                <li>Group those location by country and city.</li>
                <li>Show the location with address, city and post with its location in map.</li>
                <li>Provide documentation about technology used and flow.</li>
                <li>Unit test is optional</li>
            </ol>
        </div>
    );
  }
}

export default Home
