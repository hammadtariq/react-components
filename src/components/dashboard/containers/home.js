import React, { Component, PropTypes } from 'react'
import Header from './header'
import Footer from './footer'

const propTypes = {
    propTypes
}

const defaultProps = {
    defaultProps
}

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

Home.propTypes = propTypes

Home.defaultProps = defaultProps

export default Home
