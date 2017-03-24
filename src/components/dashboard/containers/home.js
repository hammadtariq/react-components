import React, { Component, PropTypes } from 'react'

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
