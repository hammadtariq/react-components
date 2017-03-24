import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const Contacts = () => (
    <div>
        <h2>Contacts</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Routes = () => (
    <Router>
        <div>
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

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
        </div>
    </Router>
)

export default Routes;