/* eslint linebreak-style: 0 */
import React, {Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage';
import MainContainer from './MainContainer'

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/main' component={MainContainer}/>
        </Switch>
      </main>
    )
  }
}

export default App;
