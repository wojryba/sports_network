import React, {Component} from 'react';
import EventsHeader from '../components/EventsHeader'
import EventsBody from '../components/EventsBody'

class EventDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
      body: [
        {
          header: 'This is Still Jims Test',
          location: "Meadows Park",
          date: "2pm 23/06/17",
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat et dolor condimentum rutrum nec ac quam. Mauris id mollis ante. Curabitur malesuada placerat maximus.',
          people: ['Daniel Blake', 'Steven Murphy', 'Jessy Matey']
        },
        {
          header: 'Also, Jims Test',
          location: "Church Park",
          date: "1pm 26/07/17",
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat et dolor condimentum rutrum nec ac quam. Mauris id mollis ante. Curabitur malesuada placerat maximus.',
          people: ['Daniel Blake', 'Steven Murphy', 'Jessy Matey']
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <EventsHeader />
        { this.state.body.map((content) => (
          <EventsBody header={content.header} location={content.location} date={content.date} body={content.body} attending={content.people}/>
        ))
        }
    </div>
    )
  }
}

export default EventDisplay
