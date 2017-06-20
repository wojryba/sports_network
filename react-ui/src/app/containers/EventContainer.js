import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as displyEventsActions from '../actions/displyEvents';
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

  componentWillMount() {
    this.props.fetchEventsAction();
  }

  handleClick(id) {
    this.props.addToEvent(id);
    this.props.fetchEventsAction();
  }


  render() {
    return (
      <div>
        <div className="Events_Header">
          Events Nearby
          </div>
        {this.props.fetchEvents[0].events ? <div>{ this.props.fetchEvents[0].events.map((content) => (
          <EventsBody key={content._id} header={content.event} sport={content.sport} time={content.time} location={content.location} date={content.date} body={content.description} attending={content.people.length} join={content.join} onAttendingClick={() => {this.handleClick(content._id)}}/>
        ))
      } </div> : <p></p>}
    </div>
    )
  }
}

function mapStateToProps(state) {
  const { fetchEvents } = state
  return {
    fetchEvents
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchEventsAction: displyEventsActions.fetchEvents, addToEvent: displyEventsActions.addToEvent}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDisplay);
