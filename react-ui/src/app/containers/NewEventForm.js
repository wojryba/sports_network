import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as createEventActions from '../actions/createEventActions';


class NewEventForm extends Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const event = {
      event: e.target.Event.value,
      date: e.target.Date.value,
      time: e.target.Time.value,
      sport: e.target.Sport.value,
      description: e.target.Description.value
    }
    this.props.createEventAction(event);
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

function mapStateToProps(state) {
  const { createEvent } = state
  return {
    createEvent
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createEventAction: createEventActions.createEvent}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEventForm);
