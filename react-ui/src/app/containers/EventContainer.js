import React, {Component} from 'react';
import EventsBody from '../components/EventsBody'

class EventDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
      //added state to test if it works, delete and add database
      body: [
        {
          _id: 1,
          creator: 'Barry Barryson',
          event: 'Kickabout',
          date: "23/06/17",
          time: '14:00',
          sport: 'Soccer',
          location: 'Meadows Park',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat et dolor condimentum rutrum nec ac quam. Mauris id mollis ante. Curabitur malesuada placerat maximus.'
        },
        {
          _id: 2,
          creator: 'David Barryson',
          event: 'Football Tryouts',
          date: "25/01/17",
          time: '9:00',
          sport: 'Soccer',
          location: 'Church Park',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat et dolor condimentum rutrum nec ac quam. Mauris id mollis ante. Curabitur malesuada placerat maximus.'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="Events_Header">
          Events Nearby
          </div>
        { this.state.body.map((content) => (
          <EventsBody key={content._id} header={content.event} sport={content.sport} time={content.time} location={content.location} date={content.date} body={content.description} attending={content.people} join={content.join} onAttendingClick={() => {this.handleClick(content._id)}}/>
        ))
        }
    </div>
    )
  }
}

export default EventDisplay
