/* eslint linebreak-style: 0 */
import React, {Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authActions from '../actions/authActions';
import Home from '../components/Home';
import 'normalize.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLoginClick() {
    this.props.login();
  }

  handleLogoutClick() {
    this.props.logout()
  }

  render() {
    const { isAuthenticated } = this.props
    return (
      <Home isAuthenticated={isAuthenticated}
            onLoginClick={this.handleLoginClick}
            />
    );
  }
}

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated, profile } = auth
  return {
    isAuthenticated,
    profile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({login: authActions.login, loginSuccess: authActions.loginSuccess, logout: authActions.logout}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
