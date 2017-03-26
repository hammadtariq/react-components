import React, { Component, PropTypes } from 'react';
import Lists from '../list';
import routesList from '../routesList';

import {
  BrowserRouter as Router,
  Route
 } from 'react-router-dom'

const propTypes = {
    propTypes
}

const defaultProps = {
    defaultProps
}

class Sidenav extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
 render() {
        return (
            <Router>
            <div>
             <Lists />
            {routesList.map((route, index) => (
            <Route

            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
            />
        ))}
            </div>
            </Router>
        )
    }
}

Sidenav.propTypes = propTypes
Sidenav.defaultProps = defaultProps
export default Sidenav
