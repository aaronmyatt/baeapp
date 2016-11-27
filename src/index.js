import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import ReactDOM from 'react-dom';
import App from './app/App'
import Map from './map/Map'
import List from './list/List'
import './index.css'

class Root extends Component {
    render() {

        return (<div>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="/map" component={Map} />
                    <Route path="/list" component={List} />
                </Route>
            </Router>
            <hr/>
        </div>)
    }
}

ReactDOM.render(
  < Root />,
  document.getElementById('root')
);
