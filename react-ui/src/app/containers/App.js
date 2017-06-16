/* eslint linebreak-style: 0 */
import React, {Component } from 'react';
import { Switch, Route  } from 'react-router-dom'
import {connect} from 'react-redux';
import HomePage from './HomePage';
import MainContainer from './MainContainer'

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" render={() => (
            this.props.isAuthenticated ? (
              <MainContainer/>
            ) : (
              <HomePage/>
            )
          )}/>
        </Switch>
      </main>
    )
  }
}

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated } = auth[0]
  return {
    isAuthenticated
  };
}

export default connect(
  mapStateToProps,
)(App);
