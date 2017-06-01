import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class NewEventForm extends Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault(),
    this.setState({
      event: e.target.Event.value,
      date: e.target.Date.value,
      time: e.target.Time.value,
      sport: e.target.Sport.value,
      description: e.target.Description.value
    })
  }

  render() {
    return (
      <div className="AddEvent_Container">
        <div className="AddEvent_Header">
          Create Event
        </div>
        <div className="AddEvent_Body">
          <form className="AddEvent_Form" onSubmit={this.handleSubmit}>
            <div className="AddEvent_TextInput">
              Event
              <input type="text" id="text" name="Event"/></div>
            <div className="AddEvent_TextInput">
              Date
              <input type="text" id="text" name="Date"/></div>
            <div className="AddEvent_TextInput">
              Time
              <input type="text" id="text" name="Time"/></div>
            <div className="AddEvent_TextInput">
              Sport
              <input type="text" id="text" name="Sport"/></div>
            <div className="AddEvent_TextInput">
              Description
            </div>
            <textarea id="textarea" name="Description"></textarea>
            <input className="AddEvent_SubmitInput" type="submit" value="Add Event" id="button"/>
          </form>
        </div>
      </div>
    )
  }
}

export default NewEventForm
