import React, { Component, PropTypes } from 'react'

const propTypes = {
    propTypes
}

const defaultProps = {
    defaultProps
}

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>Contact</h1>
            </div>
        )
    }
}

Contact.propTypes = propTypes

Contact.defaultProps = defaultProps

export default Contact
