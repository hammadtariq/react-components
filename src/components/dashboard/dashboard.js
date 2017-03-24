import React, { Component, PropTypes } from 'react'
import Header from '../header';
import Footer from '../footer';

const propTypes = {
    propTypes
}

const defaultProps = {
    defaultProps
}

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header />
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
                <Footer />
            </div>
        )
    }
}

Dashboard.propTypes = propTypes

Dashboard.defaultProps = defaultProps

export default Dashboard
