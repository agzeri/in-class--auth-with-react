import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

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

class Login extends Component {
  render() {
    return (
      <div>
        <p>You must log in to view this page.</p>
        <button>Log in</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/public'>Public</Link></li>
            <li><Link to='/protected'>Protected</Link></li>
          </ul>

          <Switch>
            <Route exact path='/public' component={Public} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
