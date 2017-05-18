/* eslint linebreak-style: 0 */
import React, { Component } from 'react';
import '../../styles/Home.css';
import homeImage from '../../assets/pexels-photo-114296-edited.jpg'

class Home extends Component {
  render() {
    const { onLoginClick } = this.props
    return (
      <div>
      <div className="HeaderBar">
        <h1 className="Header Header_Bar">
            Sports<br/> Network
        </h1>
        <h1 className="Header_About Header_Bar">
            About
        </h1>
        <h1 onClick={onLoginClick} className=" Header_Login_Border Header_Login Header_Bar">
            Login
        </h1>
      </div>
      <div className="ImageMiddle">
        <img className="Middle_Image" alt="soccer field" src={homeImage} />
        <h1 className="Middle_Text">Get Active. <br/> Get Involved.</h1>
        <div className="Middle_Button">Get Started.</div>
      </div>
      <div className="BottomBanner">
        <div className="Bottom_Center">
          <ul className="Bottom_Layout Bottom_Using_Sports_Network_Column">
            <li className="Bottom_Bold">Using Sports Network</li>
            <li>Privacy</li>
            <li>Terms Of Service</li>
            <li>Local Groups</li>
            <li>Guide To Running Events</li>
          </ul>
          <ul className="Bottom_Layout Bottom_About_Us_Column">
            <li className="Bottom_Bold">About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Tools</li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
