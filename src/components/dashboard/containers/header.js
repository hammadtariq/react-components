import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom';

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
                <ul>
                    <li className="li-item"> 
                        <Link to="/">Home</Link>
                    </li>
                    <li className="li-item"> 
                        <Link to="/about">About</Link>
                    </li>
                    <li className="li-item"> 
                        <Link to="/contacts">Contact</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

Header.propTypes = propTypes

Header.defaultProps = defaultProps

export default Header
