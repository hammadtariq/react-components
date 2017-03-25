import React, { Component, PropTypes } from 'react'
import Header from './containers/header';
import Footer from './containers/footer';
import Routes from '../../routes';

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
                <Routes />
                <Footer />
            </div>
        )
    }
}

Dashboard.propTypes = propTypes

Dashboard.defaultProps = defaultProps

export default Dashboard
