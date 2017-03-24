import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/dashboard/containers/home.js';
import About from './components/dashboard/containers/about.js';
import Contacts from './components/dashboard/containers/contact.js';
import Dashboard from './components/dashboard/dashboard';

const Routes = () => (
    <Router>
        <div>
            <Dashboard />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
        </div>
    </Router>
)

export default Routes;