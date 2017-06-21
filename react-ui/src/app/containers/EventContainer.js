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

  componentDidUpdate() {
    if (this.props.joinEvent[0].joined === true) {
      this.props.fetchEventsAction();
      this.props.added();
    }
  }

  handleClick(id) {
    this.props.addToEvent(id);
  }

  handleDelete(id) {
    this.props.deleteEvent(id);
    this.props.fetchEventsAction();
  }


  render() {
    console.log (this.props.joinEvent[0])
    return (
      <div>
        <div className="Events_Header">
          Events Nearby {this.props.joinEvent[0].error ? <span>You can't join the event twice!</span> : <span></span>}
          </div>
        {this.props.fetchEvents[0].events ? <div>{ this.props.fetchEvents[0].events.map((content) => (
          <EventsBody key={content._id} header={content.event} sport={content.sport} time={content.time} location={content.location} date={content.date} body={content.description} attending={content.people.length} join={content.join} enableDelete={content.enableDelete} onDeleteClick={() => this.handleDelete(content._id)} onAttendingClick={() => {this.handleClick(content._id)}}/>
        ))
      } </div> : <p></p>}
    </div>
    )
  }
}

function mapStateToProps(state) {
  const { fetchEvents, joinEvent } = state
  return {
    fetchEvents, joinEvent
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchEventsAction: displyEventsActions.fetchEvents, addToEvent: displyEventsActions.addToEvent, added: displyEventsActions.added, deleteEvent: displyEventsActions.deleteEvent}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDisplay);
