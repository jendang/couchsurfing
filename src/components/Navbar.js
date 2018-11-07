import React, { Component } from 'react';
import './styles/navbar.css';
import {Link} from 'react-router-dom';



class Navbar extends Component {
  render() {
    return (
      <div className="Nav">
      <ul>
        <Link to= {'/hosts'}><li><a href=" ">Hosts</a></li></Link>

        <Link to= {'/surfers'}><li><a href=" ">Surfers</a></li></Link>

<<<<<<< HEAD
        <li><a href="https://www.messages.com">Messages</a></li>

        <li><a href="https://www.preferences.com">Preferences</a></li>

        <Link to= {'/'}><li><a href=" ">Home</a></li></Link>


        

=======
       <li><img alt="home" src="images/home.svg"></img></li>

       <li><img alt="messages" src="images/envelope.svg"></img></li>

       <li><img alt="preferences" src="images/preference.svg"></img></li>

       <li><img alt="logout" src="images/logout.svg"></img></li>
>>>>>>> bef170e04261af35b836c0cb179e0330a1ed8fb9
      
       </ul>
      </div>

    );
  }
}

export default Navbar;