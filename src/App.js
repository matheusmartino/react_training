import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './ui/Navbar';
import Home from './container/Home';

class App extends Component {
  render() {
    const logo = 'localDevOne'

    return (
      <div className="container">
        <NavBar logo={logo}>
        </NavBar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
