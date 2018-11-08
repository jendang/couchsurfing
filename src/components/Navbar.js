import React, { Component } from 'react';
import './styles/navbar.css';
import {Link} from 'react-router-dom';



class Navbar extends Component {
  render() {
    return (
      <div className="Nav">
      <ul>
        
        <Link to= {'/'}><li><img alt="logout" src="images/logout.svg"></img></li></Link>
        <li><img alt="preferences" src="images/preference.svg"></img></li>
        <li><img alt="messages" src="images/envelope.svg"></img></li>
        <Link to= {'/users'}><li><img alt="home" src="images/home.svg"></img></li></Link>
        <div className ="logo"><li><img  alt="logo" src="images/logodef.svg"></img></li></div>
       </ul>
       </div>
      
    );
  }
}

export default Navbar;