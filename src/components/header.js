import React, { Component, PropTypes } from 'react'

const propTypes = {
    propTypes
}

const defaultProps = {
    defaultProps
}

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        )
    }
}

Header.propTypes = propTypes

Header.defaultProps = defaultProps

export default Header
