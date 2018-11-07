import React, { Component } from 'react';
import './styles/navbar.css';


class Navbar extends Component {
  render() {
    return (
      <div className="Nav">
      <ul>

       <li><img alt="home" src="images/home.svg"></img></li>

       <li><img alt="messages" src="images/envelope.svg"></img></li>

       <li><img alt="preferences" src="images/preference.svg"></img></li>

       <li><img alt="logout" src="images/logout.svg"></img></li>
      
       </ul>
      </div>

    );
  }
}

export default Navbar;