import React, { Component } from 'react';
import './styles/navbar.css';
import {Link} from 'react-router-dom';



class Navbar extends Component {
  render() {
    return (
      <div className="Nav">
      <ul>
        {/* <Link to= {'/hosts'}><li><a href=" ">Hosts</a></li></Link>

        <Link to= {'/surfers'}><li><a href=" ">Surfers</a></li></Link>
 */}

        

       <li><img alt="logout" src="images/logout.svg"></img></li>


       <li><img alt="preferences" src="images/preference.svg"></img></li>

       <li><img alt="messages" src="images/envelope.svg"></img></li>
      
       <Link to= {'/'}><li><img alt="home" src="images/home.svg"></img></li></Link>
       
       </ul>
      </div>

    );
  }
}

export default Navbar;