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
      props.checkAndSaveUser(profile);
    })
  }
  render() {
    return (
      <div>
        {this.props.user.isNew ?
          <div>TUTORIAL</div> :
          <div>
            <h1>I am main container</h1>
          </div>
        }
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
