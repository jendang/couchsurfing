import React, { Component } from 'react';
import './styles/navbar.css';


class Navbar extends Component {
  render() {
    return (
      <div id="Nav">
      
      <ul>

        <li><a href="https://www.home.com">Home</a></li>

        <li><a href="https://www.preferences.com">Preferences</a></li>

        <li><a href="https://www.messages.com">Messages</a></li>

        <li><a href="https://www.surfer.com">Surfer</a></li>

        <li><a href="https://www.host.com">Host</a></li>
      
      </ul>

      </div>

    );
  }
}

export default Navbar;