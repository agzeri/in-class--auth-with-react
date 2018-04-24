import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Public extends Component {
  render() {
    return <h3>Public</h3>
  }
}

class Protected extends Component {
  render() {
    return <h3>Protected</h3>
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Public</li>
          <li>Protected</li>
        </ul>
      </div>
    );
  }
}

export default App;
