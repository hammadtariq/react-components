import React, { Component, PropTypes } from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

const propTypes = {
    propTypes
}

const defaultProps = {
    defaultProps
}

class Lists extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/bubblegum">About</Link></li>
                  <li><Link to="/shoelaces">Topics</Link></li>
                </ul>
                
            </div>
        )
    }
}

Lists.propTypes = propTypes

Lists.defaultProps = defaultProps

export default Lists
