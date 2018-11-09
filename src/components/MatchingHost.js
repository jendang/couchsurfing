import React, { Component } from 'react';
import Navbar from './Navbar'
import './styles/matching.css'


class MatchingHost extends Component {


    render() { 
    
        return (
        <div><Navbar />
        <div className="main">
          <div className="message">
            <h2>Congratulation Kyle!</h2>
           <h2>You have been matched with this host.</h2>

          </div>



            <div class="card">
            
              <div class="flex-container">
                <div className="kyle"><img width="150px" height="150px" alt="profile" src="images/sofasquare.jpg"/></div>
                <div className="mimi"><img width="150px" height="150px" alt="profile" src="images/mimi.png"/></div>
              </div>

              <p>Mimi</p>
              <button className="contact">Contact Host</button>
            </div><br></br>


        </div>
        
        </div>
        


          );
    }
}


  
  export default (MatchingHost);


