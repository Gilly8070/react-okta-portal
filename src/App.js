import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Security, SecureRoute, ImplicitCallBack } from '@okta/okta-react';

import Navbar from "./components/layout/Navbar";
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import Login from './components/auth/Login';

import './App.css';

const onAuthRequired = ({ history= [] }) => {
  history.push('/login')
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-603325.okta.com/oauth2/default"
          clientId="0oa111te2wrr2pY9j4x7"
          redirectUri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/staff" exact={true} component={Staff} />
              <Route
                path="/login"
                render={() => <Login baseUrl="https://dev-603325.okta.com" />}
              />
              <Route path="/implicit/callback" component={ImplicitCallBack} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
