import React, {Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class NewEventForm extends Component{
  render(){
    return(
  <div className="AddEvent_Container">
    <div className="AddEvent_Header">
      Create Event
    </div>
    <div className="AddEvent_Body">
      <form className="AddEvent_Form">
        <div className="AddEvent_TextInput"> Event <input type="text" id="text"/></div>
        <div className="AddEvent_TextInput"> Date  <input type="text" id="text"/></div>
        <div className="AddEvent_TextInput"> Time  <input type="text" id="text"/></div>
        <div className="AddEvent_TextInput"> Sport <input type="text" id="text"/></div>
        <div className="AddEvent_TextInput"> Description </div>
        <textarea id="textarea"></textarea>
        <input className="AddEvent_SubmitInput" type="submit" value="Add Event" id="button"/>
      </form>
    </div>
  </div>
  )}
}

export default NewEventForm
