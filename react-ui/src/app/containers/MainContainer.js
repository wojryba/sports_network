/* eslint linebreak-style: 0 */
import React, {Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Main from '../components/Main'
import TutorialContainer from './TutorialContainer'
import * as authActions from '../actions/authActions';
import 'normalize.css';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        {this.props.user.isNew ? <TutorialContainer onLogoutClick={this.handleLogout}/> : <Main onLogoutClick={this.handleLogout}/>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { auth, user } = state
  const { isAuthenticated, profile } = auth
  return {
    isAuthenticated,
    profile,
    user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({login: authActions.login, loginSuccess: authActions.loginSuccess, logout: authActions.logout, checkAndSaveUser: authActions.checkAndSaveUser}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
