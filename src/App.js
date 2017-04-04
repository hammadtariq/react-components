import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Sidenav from './sideNav/sideNav';

import './App.css';

class App extends Component {
  
  componentDidMount() {
    fetch('https://api.github.com/gists')
      .then(res => res.json())
      .then(result => result)
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
          <AppBar title="My AppBar" />
        </MuiThemeProvider>
        <Sidenav />
        {/*<Routes/>*/}
      </div>
    );
  }
}
export default App;
