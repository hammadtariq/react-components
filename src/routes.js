import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/dashboard/containers/home.js';
import About from './components/dashboard/containers/about.js';
import Header from './components/dashboard/containers/header.js';
import Contact from './components/dashboard/containers/contact';
import Dashboard from './components/dashboard/dashboard';

const Routes = () => (
    <Router>
        <div>
            <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
)

export default Routes;