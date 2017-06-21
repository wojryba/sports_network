import React, { Component } from 'react';

class EventsHeader extends Component {

  render(){
    const { header, sport, date, time, location, body, onAttendingClick, attending, enableDelete, onDeleteClick } = this.props
    return(
      <div className="Event_Container">
          <span className="Event_Header">{header}</span> - <span className="Event_Details">{sport} - {location} -  {time} {date} - Attending {attending}</span>
          <span onClick={onAttendingClick}>Join</span>
          {enableDelete ? <span onClick={onDeleteClick}>DELETE</span> : <span></span>}
          <div className="Event_Body">{body}</div>
      </div>
    )
  }
}

export default EventsHeader;
