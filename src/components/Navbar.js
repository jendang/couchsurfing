import React, { Component } from 'react';
import './styles/navbar.css';
import {Link} from 'react-router-dom';



class Navbar extends Component {
  render() {
    return (
      <div id="Nav">
      
      <ul>
        <Link to= {'/hosts'}><li><a href=" ">Hosts</a></li></Link>

        <Link to= {'/surfers'}><li><a href=" ">Surfers</a></li></Link>

        <li><a href="https://www.messages.com">Messages</a></li>

        <li><a href="https://www.preferences.com">Preferences</a></li>

        <Link to= {'/'}><li><a href=" ">Home</a></li></Link>


        

      
      </ul>

      </div>

    );
  }
}

export default Navbar;