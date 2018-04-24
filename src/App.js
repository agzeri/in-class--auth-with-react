import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

const AuthService = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true,
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false,
    setTimeout(cb, 100)
  }
}

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
  state = {
    redirectToReferrer: false
  }

  handleLogin = () => {
    AuthService.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { redirectToReferrer } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if ( redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view this page. <strong>{ from.pathname }</strong>, my friend :)</p>
        <button onClick={this.handleLogin}>Log in</button>
      </div>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthService.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

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
            <PrivateRoute path='/protected' component={Protected} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
