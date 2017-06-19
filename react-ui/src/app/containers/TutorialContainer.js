/* eslint linebreak-style: 0 */
import React, {Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as tutorialActions from '../actions/tutorialActions';
import PlacesAutocomplete from 'react-places-autocomplete'
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class TutorialContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      address: 'London, United Kingdom',
      sports: ['Soccer'],
    };

    this.onChange = (address) => this.setState({
      address,
      sports: this.state.sports
    })

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckBoxes = this.handleCheckBoxes.bind(this);
  }

  handleCheckBoxes(sports) {
    this.setState({
      address: this.state.address,
      sports,
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const userProfile = {
      name: e.target.Name.value,
      location: this.state.address,
      sports: this.state.sports
    }
    this.props.saveTutorial(userProfile);
  }

  render() {
    const { onLogoutClick } = this.props;
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    const myStyles = {
      input: {
        padding: '0px',
        marginLeft: '20px',
        border: 'none',
        borderBottom: '2px solid #747474'
      }
    }

    return (
      <div className="Page_Container">
        <div className="HeaderBarContainer">
          <h1 className="Header Header_Bar">
              Sports<br/> Network
          </h1>
          <h1 className="Header_About Header_Bar">
              About
            </h1>
          <h1 onClick={onLogoutClick}  className=" Header_Login_Border Header_Login Header_Bar">
              Logout
          </h1>
        </div>
        <div className="Body_Container">
          <div className="Body_Container_Center">
            <div className="Tutorial_Container">
              <div className="Tutorial_Header">
                <h4>Edit Your Profile</h4>
                <p>Welcome to Sports Network. Tell us a bit more about yourself.</p>
              </div>
              <form className="AddEvent_Form" onSubmit={this.handleSubmit}>
                <div className="AddEvent_TextInput">
                  Name
                  <input type="text" id="text" name="Name"/>
                </div>
                <div className="AddEvent_TextInput">
                  Location
                  <PlacesAutocomplete styles={myStyles} inputProps={inputProps} />
                </div>
                <div className="AddEvent_TextInput">
                  Sports:
                  <CheckboxGroup
                    name="Sports"
                    value={this.state.sports}
                    onChange={this.handleCheckBoxes}>

                    <label className="Tutorial_Checkbox"><Checkbox value="Soccer"/> Soccer</label><br></br>
                    <label className="Tutorial_Checkbox"><Checkbox value="Volleyball"/> Volleyball</label><br></br>
                    <label className="Tutorial_Checkbox"><Checkbox value="Basketball"/> Basketball</label><br></br>
                    <label className="Tutorial_Checkbox"><Checkbox value="Tennis"/> Tennis</label><br></br>
                    <label className="Tutorial_Checkbox"><Checkbox value="Table Tennis"/> Table Tennis</label><br></br>
                    <label className="Tutorial_Checkbox"><Checkbox value="Hockey"/> Hockey</label><br></br>
                    <label className="Tutorial_Checkbox"><Checkbox value="Golf"/> Golf</label><br></br>
                    <label className="Tutorial_Checkbox"><Checkbox value="Badminton"/> Badminton</label><br></br>
                    <label className="Tutorial_Checkbox"><Checkbox value="American Football"/> American Football</label>
                  </CheckboxGroup>
                </div>
                <input className="AddEvent_SubmitInput" type="submit" value="Join" id="button"/>
              </form>
            </div>
          </div>
        </div>
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
  return bindActionCreators({saveTutorial: tutorialActions.saveTutorial}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialContainer);
