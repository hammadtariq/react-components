import React, { Component, PropTypes } from 'react'


const propTypes = {
    propTypes
}

const defaultProps = {
    defaultProps
}

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>About</h1>
            </div>
        )
    }
}

About.propTypes = propTypes

About.defaultProps = defaultProps

export default About
