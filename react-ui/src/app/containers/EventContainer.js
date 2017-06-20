import React, {Component} from 'react';
import EventsBody from '../components/EventsBody'

class EventDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
      //added state to test if it works, delete and add database
      body: [
        {
          event_id: 1,
          header: 'Kickabout',
          sport: 'Soccer',
          location: "Meadows Park",
          time: '2pm',
          date: "23/06/17",
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat et dolor condimentum rutrum nec ac quam. Mauris id mollis ante. Curabitur malesuada placerat maximus.',
          people: ['Daniel Blake', 'Steven Murphy', 'Jessy Matey'],
          join: true
        },
        {
          event_id: 2,
          header: 'Football Tryouts',
          sport: 'American Football',
          location: "Church Park",
          time: '2pm',
          date: "26/07/17",
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat et dolor condimentum rutrum nec ac quam. Mauris id mollis ante. Curabitur malesuada placerat maximus.',
          people: ['Daniel Blake', 'Steven Murphy', 'Jessy Matey', 'Daniel Blake'],
          join: false
        }
      ]
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    let trueNum = e - 1
    //change this to toggle join
    console.log(this.state.body[trueNum].join)
  }

  render() {
    return (
      <div>
        <div className="Events_Header">
          Events Nearby
          </div>
        { this.state.body.map((content) => (
          <EventsBody key={content.event_id} header={content.header} sport={content.sport} time={content.time} location={content.location} date={content.date} body={content.body} attending={content.people} join={content.join} onAttendingClick={() => {this.handleClick(content.event_id)}}/>
        ))
        }
    </div>
    )
  }
}

export default EventDisplay
