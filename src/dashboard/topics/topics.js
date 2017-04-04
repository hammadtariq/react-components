import React, { Component, PropTypes } from 'react'

//propType initializite here with type
const propTypes = {
    propTypes
}

//PropTypes values are given here
const defaultProps = {
    defaultProps
}


class Topics extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>Topics</h1>
            </div>
        )
    }
}

Topics.propTypes = propTypes

Topics.defaultProps = defaultProps

export default Topics
