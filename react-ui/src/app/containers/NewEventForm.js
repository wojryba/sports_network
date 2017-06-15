import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as createEventActions from '../actions/createEventActions';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';


class NewEventForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      startDate: moment(),
      time: null
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      startDate: date,
      time: this.state.time,
    });
  }

  handleTimeChange(value) {
    this.setState({
      startDate: this.state.startDate,
      time: value
    })
  }


  handleSubmit(e){
    e.preventDefault();
    const event = {
      event: e.target.Event.value,
      date: this.state.startDate.format('L'),
      time: this.state.time.valueOf(),
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
              <DatePicker
                className="AddEvent_DateInput"
                selected={this.state.startDate}
                onChange={this.handleDateChange}
              /></div>
            <div className="AddEvent_TextInput">
              Time
              <TimePicker
                style={{ width: 100 }}
                showSecond={false}
                defaultValue={moment()}
                className="AddEvent_TimeInput"
                onChange={this.handleTimeChange}
              /></div>
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
