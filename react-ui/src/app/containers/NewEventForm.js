import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as createEventActions from '../actions/createEventActions';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import PlacesAutocomplete from 'react-places-autocomplete'
import Dropdown from 'react-dropdown'

import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';


class NewEventForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      startDate: moment(),
      time: moment(),
      address: '',
      sport: ''
    };

    this.onChange = (address) => this.setState({
      startDate: this.state.startDate,
      time: this.state.time,
      address,
      sport: this.state.sport
    })

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._onSelect = this._onSelect.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      startDate: date,
      time: this.state.time,
      address: this.state.address,
      sport: this.state.sport
    });
  }

  handleTimeChange(value) {
    this.setState({
      startDate: this.state.startDate,
      time: value,
      address: this.state.address,
      sport: this.state.sport
    })
  }

  _onSelect (option) {
    this.setState({
      startDate: this.state.startDate,
      time: this.state.time,
      address: this.state.address,
      sport: option.value
    })
  }


  handleSubmit(e){
    e.preventDefault();
    const event = {
      event: e.target.Event.value,
      date: this.state.startDate.format('L'),
      time: this.state.time.valueOf(),
      sport: this.state.sport,
      location: this.state.address,
      description: e.target.Description.value
    }
    this.props.createEventAction(event);
  }

  render() {
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

    const options = [
      'Soccer', 'Volleyball', 'Basketball', 'Tennis', 'Table Tennis', 'Hockey', 'Golf', 'Badminton', 'American Football'
    ];
    const defaultOption = options[0];

    return (
      <div className="AddEvent_Container">
        <div className="AddEvent_Header">
          Create Event
          {this.props.createEvent[0].eventCreated ? <p>Event Created!</p> : <p></p>}
          {this.props.createEvent[0].error ? <p>You must input Event name, location and choose a sport.</p> : <p></p>}
        </div>
        <div className="AddEvent_Body">
          <form className="AddEvent_Form" onSubmit={this.handleSubmit}>
            <div className="AddEvent_TextInput">
              Event
              <input type="text" id="text" name="Event"/>
            </div>
            <div className="AddEvent_TextInput">
              Date
              <DatePicker
                className="AddEvent_DateInput"
                selected={this.state.startDate}
                onChange={this.handleDateChange}
              />
            </div>
            <div className="AddEvent_TextInput">
              Time
              <TimePicker
                style={{ width: 100 }}
                showSecond={false}
                defaultValue={moment()}
                className="AddEvent_TimeInput"
                onChange={this.handleTimeChange}
              />
            </div>
            <div className="AddEvent_TextInput">
              Sports:
              <Dropdown className="AddEvent_DropDown" options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
            </div>
            <div className="AddEvent_TextInput">
              Location
              <PlacesAutocomplete styles={myStyles} inputProps={inputProps} />
            </div>
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
