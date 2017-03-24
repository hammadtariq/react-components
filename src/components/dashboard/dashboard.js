import React, { Component, PropTypes } from 'react'
import Header from './containers/header';
import Footer from './containers/footer';

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
                <h1>Body</h1>
                <Footer />
            </div>
        )
    }
}

Dashboard.propTypes = propTypes

Dashboard.defaultProps = defaultProps

export default Dashboard
