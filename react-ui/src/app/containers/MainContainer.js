/* eslint linebreak-style: 0 */
import React, {Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authActions from '../actions/authActions';
import 'normalize.css';

class MainContainer extends Component {
  constructor(props) {
    super(props);

    authActions.auth.on('profile_updated', (profile) => {
      props.loginSuccess(profile);
    })
  }
  render() {
    console.log(this.props)
    this.props.user();
    console.log(this.props)
    return (
      <div>
        <h1>I am main container</h1>
      </div>
    )
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
  return bindActionCreators({login: authActions.login, loginSuccess: authActions.loginSuccess, logout: authActions.logout, user: authActions.user}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
