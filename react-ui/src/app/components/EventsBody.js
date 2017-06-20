import React, { Component } from 'react';

class EventsHeader extends Component {

  render(){
    const { header, sport, date, time, location, body } = this.props
    return(
      <div className="Event_Container">
          <span className="Event_Header">{header}</span> - <span className="Event_Details">{sport} - {location} -  {time} {date}</span>
          <div className="Event_Body">{body}</div>
      </div>
    )
  }
}

export default EventsHeader;
