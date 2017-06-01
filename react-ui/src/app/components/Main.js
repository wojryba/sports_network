import React, { Component } from 'react';
import '../../styles/Main.css';
import NewEventForm from '../containers/NewEventForm'

class Main extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="Page_Container">
        <div className="HeaderBarContainer">
          <h1 className="Header Header_Bar">
              Sports<br/> Network
          </h1>
          <h1 className="Header_About Header_Bar">
              About
            </h1>
          <h1 className=" Header_Login_Border Header_Login Header_Bar">
              Logout
          </h1>
        </div>
        <div className="Body_Container">
          <div className="Body_Container_Right">
            <NewEventForm />
          </div>
        </div>
    </div>
    )
  }


}

export default Main;
