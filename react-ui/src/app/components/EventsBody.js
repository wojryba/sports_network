import React, { Component } from 'react';

class EventsHeader extends Component {

  render(){
    const { header, date, location, body, attending } = this.props
    return(
      <div className="Event_Container">
          {header}  {location}  {date}<br />
          {body} <br />
          {attending.length} people are attending
          {attending.map((attending) => (
            <div>{attending}</div>
          ))}
      </div>
    )
  }
}

export default EventsHeader;
