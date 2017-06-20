import React, { Component } from 'react';

class EventsHeader extends Component {

  render(){
    const { header, sport, date, time, location, body, attending, join, onAttendingClick } = this.props
    return(
      <div className="Event_Container">
          <span className="Event_Header">{header}</span> - <span className="Event_Details">{sport} - {location} -  {time} {date}</span>
          <div className="Event_Body">{body}</div>
          <span className="Event_Numbers">{attending.length}</span> <span className="Event_Details"> people are attending </span>
          {attending.map((attending) => (
            <span className="Event_Details"> {attending}, </span>
          ))}
          {join? <div onClick={onAttendingClick} className="Event_Button Event_Second_Color">Going</div> : <div onClick={onAttendingClick} className="Event_Button">Join</div> }
      </div>
    )
  }
}

export default EventsHeader;
